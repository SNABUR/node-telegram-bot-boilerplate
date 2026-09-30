# Handoff VPS — Spike Monitor / Telegram Bot

Documento para el dev que opera el VPS. Explica **por qué** se hizo cada cambio,
**qué está mal hoy**, y **cómo verificar que quedó bien**.

> **Contexto importante sobre el árbol de archivos**
> Este repo (`telegram_bot`) **no es autonomous**: importa código de otros dos
> repos del mismo grupo. Por eso tu estructura de carpetas en el VPS tiene que
> respectarla, aunque internamente tenga otros nombres. Ver §4 — es la causa
> probable de que el monitor de spikes nunca haya disparado.

---

## 1. TL;DR

Se arreglaron tres fallos **independientes** que afectaban al spike monitor. Los tres
fallaban **en silencio**: el monitor podía estar "habilitado" en la config y no
enviar ninguna alerta, sin un solo error visible.

| # | Fallo | Síntoma | Estado |
|---|---|---|---|
| 1 | URL de API hardcodeada y muerta (`404`) | Token nunca se resuelve → monitor inactivo | ✅ Arreglado |
| 2 | Ruta del SQLite relativa al `cwd` | 0 velas → monitor inactivo | ⚠️ **Requiere que lo configures** (§3, §6) |
| 3 | `/settoken` validaba contra una tabla vieja | Aceptaba tokens que el monitor no puede leer | ✅ Arreglado |

**El fallo #2 es el que sigue abierto y lo único que necesita tu acción.**

---

## 2. Fallo #1 — La URL de la API estaba muerta

### Qué pasaba

El bot pedía la metadata del token a:

```
https://d1-sync-worker.promisesimetry.workers.dev/api/tokens
```

Ese subdominio **no existe** (verificado: devuelve `404`). Pero el `fetch` a un 404
**no lanza excepción**, así que el código seguía como si nada:

1. `fetch(...)` → responde `404`, sin throw
2. `res.json()` → falla porque el cuerpo no es JSON → **caught** en un `try/catch` mudo
3. `token = null`
4. La función que revisa spikes empieza con `if (!token) return;` → **sale sin hacer nada**

Resultado: token sin resolver → **cero alertas, cero errores**. Solo un `console.error`
del `catch` que nadie miraba.

### Por qué esa URL

La fuente de verdad de tokens es la tabla `tokens_v2` de **Cloudflare D1**, servida por
el worker `d1-sync-worker` (carpeta `d1-sync-worker/workers/amm-api` en el repo).

El dominio correcto **no** es el subdominio `workers.dev`, sino el custom domain
declarado en `workers/amm-api/wrangler.toml`:

```toml
routes = [
  { pattern = "api.hoglet.xyz", custom_domain = true },
]
```

Y ese mismo archivo lleva un aviso que hay que leer:

> this list is AUTHORITATIVE — every custom domain the worker must serve has to be
> declared here, otherwise a deploy removes any dashboard-configured domain that is
> missing from this list

O sea: **cualquier deploy borra del dashboard los dominios que no estén en esa lista.**
Por eso un día `api.hoglet.xyz` dejó de existir y nadie lo notó.

### Qué se cambió

- Todo el consumo de la API pasa por **un solo módulo nuevo**: `app/lib/hogletApi.ts`.
- La base viene de `process.env.HOGLET_API_URL` con fallback `https://api.hoglet.xyz`.
  **Nunca más un subdominio `workers.dev` hardcodeado.**
- Se usa el endpoint de lookup exacto `/api/tokens/:id`, no `?search=`:
  - `?search=` con un address de 64 hex hace `LIKE '%0x…64hex%'` y revienta D1 con 500
    (el propio worker lo documenta en `routes/tokens.ts`)
  - `/api/tokens/:id` devuelve `data` como **objeto**; `?search=` lo devuelve como
    **array**. No son intercambiables.
- Se valida `res.ok` y se loguea explícitamente. Si un token no resuelve, ahora sale un
  error claro en vez de degradar en silencio.

---

## 3. Fallo #2 — La ruta del SQLite (ESTE SIGUE ABIERTO)

Este es el importante. Leer con calma.

### Qué pasa

El spike monitor necesita las **velas OHLC de 1 minuto**. Esos datos viven en el
**SQLite del indexer**, no en D1 ni en Supabase (ver §5).

El cliente SQLite del indexer tiene su ruta de conexión escrita a mano en
`amm_indexer/prisma/sqlite/schema.prisma`:

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"      // ← LITERAL, no env("...")
}
```

Tres consecuencias, y las tres importan:

1. **No es `env(...)`**, así que Prisma lo graba en el cliente generado e **ignora
   `DATABASE_URL`**. No hay forma de configurarlo por `.env` en el indexer.
2. **La ruta es relativa** → se resuelve contra `process.cwd()`, el directorio desde
   el que arrancó Node, **no** la carpeta del proyecto.
3. **`ecosystem.config.js` no define `cwd`** (ni en `amm_indexer` ni en `telegram_bot`),
   así que el cwd es "donde sea que se lanzara pm2".

### Por qué esto rompe el monitor

`amm_indexer` y `telegram_bot` son **dos apps de pm2 separadas, en carpetas
distintas**, y ambas abren `file:./dev.db`. Si pm2 se lanzó desde la raíz común, las
dos abrirían el mismo archivo. Si se lanzó desde cada carpeta de proyecto, cada una
abre **un archivo distinto**.

Y el modo de fallo es el peor posible: **SQLite crea un `dev.db` vacío** en el lugar
equivocado y no dice nada. El bot lee 0 velas, no encuentra nada, y sale. Cero alertas,
cero errores. Una base vacía es indistinguible de "no hay spikes".

### Qué se cambió

Se agregó soporte para fijar la ruta por entorno, en `app/lib/spikeMonitor.ts`:

```ts
const INDEXER_SQLITE_PATH = process.env.INDEXER_SQLITE_PATH;
const indexerPrisma = INDEXER_SQLITE_PATH
    ? new IndexerPrismaClient({ datasources: { db: { url: `file:${INDEXER_SQLITE_PATH}` } } })
    : new IndexerPrismaClient();      // ← comportamiento actual, sin cambios
```

Si **no** definís la variable, el bot se comporta exactamente igual que antes. No hay
riesgo: solo lo activás cuando sabés cuál es la ruta buena.

**Vos tenés que poner la variable** → §6.

---

## 4. ⚠️ Mapa de archivos: tu árbol tiene que parecerse a este

Este es el punto que más confunde. **`telegram_bot` importa de otros repos con rutas
relativas.** Si la estructura no coincide, el build falla o —peor— falla en runtime.

El import clave está en `app/lib/spikeMonitor.ts:1`:

```ts
import { PrismaClient as IndexerPrismaClient } from "../../../amm_indexer/prisma/generated/sqlite";
```

`../../..` sube **tres niveles**: `app/lib` → `telegram_bot` → **raíz del grupo**. De
ahí baja a `amm_indexer`.

Es decir, el bot necesita leer el cliente Prisma **generado** del indexer. Eso implica
dos cosas:

1. Las carpetas tienen que ser **hermanas**, bajo un mismo padre:

```
/ruta/al/proyecto/              <-- CUALQUIERA, pero el padre debe ser el mismo
├── telegram_bot/
│   ├── app/
│   ├── dist/                   <-- build generado
│   └── amm_indexer/            <-- NO. Este NO va dentro de telegram_bot
├── amm_indexer/
│   ├── prisma/
│   │   └── generated/
│   │       └── sqlite/         <-- esto es lo que importa el import de arriba
│   └── prisma/sqlite/dev.db    <-- la base de velas OHLC
└── d1-sync-worker/             <-- no se importa, pero documentalo igual
```

2. `amm_indexer/prisma/generated/sqlite/` **tiene que existir y estar generado**. Si en
   tu checkout no está, el bot no arranca:

```bash
cd /ruta/al/proyecto/amm_indexer
pnpm install
pnpm exec prisma generate --schema prisma/sqlite/schema.prisma
ls -la prisma/generated/sqlite/     # tiene que haber client.js, index.js, etc.
```

**No renombres ni muevas `amm_indexer` dentro de `telegram_bot`.** Es una carpeta
hermana, no una subcarpeta. Si en tu VPS el indexer tiene otro nombre o está en otra
ruta, ajustá el import en `spikeMonitor.ts:1` o creá un symlink — pero que el dev lo
sepa explícitamente.

### Los otros dos repos y por qué NO hay que moverlos

| Repo | Quién lo usa | Cómo |
|---|---|---|
| `d1-sync-worker` | Nadie, en runtime | El bot lo consume **por HTTP** (`api.hoglet.xyz`), no por import |
| `spike_indexer` | Nadie, en runtime | Servicio separado (arbitraje), corre en su propio Docker |

Si `d1-sync-worker` no está en el mismo disco que el bot, **no pasa nada**. Ese Worker
es Cloudflare, vive en internet.

---

## 5. Dónde vive cada dato (para que no busques donde no es)

| Dato | Dónde vive | Cómo lo accede el bot |
|---|---|---|
| Metadata de tokens (símbolo, decimals, verificado) | **D1** en Cloudflare | HTTP a `api.hoglet.xyz` vía `app/lib/hogletApi.ts` |
| OHLC **5m / 1h / 1d** | **Supabase** (Postgres) | `prisma.ohlcData` (cliente Supabase del bot) |
| OHLC **1m** ← el que usa el spike monitor | **SQLite del indexer** | `indexerPrisma.ohlcData` → **requiere `INDEXER_SQLITE_PATH`** |
| Config de grupos (`spikeMonitorEnabled`, `spikeMonitorTokenId`) | **Supabase** | `app/db/drizzle.ts` |

### Trampa importante: el 1m NO está en Supabase

Verificado consultando Supabase:

```
1d → 10.657 filas
1h → 80.153 filas
5m → 291.590 filas
1m → 0 filas          ← no existe
```

El indexer escribe el 1m **solo** a SQLite (`amm_indexer/lib/tasks/executeOhlcAggregation.ts:219`
hace `sqliteDb.ohlcData.upsert`; los agregados 5m/1h/1d van a Supabase). Por eso
**no se puede cambiar el spike monitor a leer de Supabase** sin cambiar el timeframe de
las alertas. Si alguien te propone eso, la respuesta es que el 1m no está.

---

## 6. Variables de entorno — qué poner y dónde

Van en el **`.env` del `telegram_bot`** (el mismo que ya tiene `DATABASE_URL`).

### `INDEXER_SQLITE_PATH` — la que falta ( Acción requerida )

**Ruta ABSOLUTA** al `dev.db` que realmente escribe el indexer.

```bash
# 1. Descubrir el archivo real que tiene abierto el indexer
lsof -p "$(pgrep -f 'run-indexer|amm-indexer' | head -1)" 2>/dev/null | grep -i '\.db'

# 2. Si eso no devuelve nada, buscar candidatos
find / -name "dev.db" -path "*amm_indexer*" 2>/dev/null

# 3. Y descartar los archivos señuelo que crea el cwd equivocado
find / -name "dev.db" 2>/dev/null -exec ls -la {} \;
```

**Descartá cualquier `dev.db` que esté en la carpeta del `telegram_bot`** o en otra
carpeta que no sea la del indexer: esos son los archivos vacíos que crea el problema.
El bueno es el que **crece** con el tiempo.

Luego:

```bash
echo 'INDEXER_SQLITE_PATH=/ruta/real/al/dev.db' >> /ruta/al/proyecto/telegram_bot/.env
```

Sin valor inicial: `/ruta/real` es el resultado del paso 1 o 2. **No lo copies de este
documento.**

### `HOGLET_API_URL` — opcional

Base de la API de tokens. Si no lo ponés, usa `https://api.hoglet.xyz`, que es lo
correcto. Solo definilo si apuntás a un entorno distinto:

```bash
HOGLET_API_URL=https://api.hoglet.xyz
```

### Lo que **no** hay que agregar

| Variable | Por qué no |
|---|---|
| `DATABASE_URL` para el SQLite | El cliente del indexer tiene la ruta **literal** en su schema; ignora cualquier env |
| `cwd` en `ecosystem.config.js` | No es la solución: deja el problema latente para el próximo deploy desde otro directorio |
| Cualquier clave del worker / D1 | El bot es un **cliente público** de solo lectura. No necesita credenciales |

---

## 7. Levantar / reiniciar

El bot corre en **pm2 sobre el host** (no en Docker). El indexer también. El
`spike_indexer` sí corre en Docker, pero no participa de esto.

```bash
cd /ruta/al/proyecto/telegram_bot

# 1. Bajar los cambios
git pull

# 2. Si actualizaste amm_indexer, hay que regenerar el cliente Prisma SQLite
#    (el bot lo importa; ver §4)
cd /ruta/al/proyecto/amm_indexer
pnpm install
pnpm exec prisma generate --schema prisma/sqlite/schema.prisma
cd ../telegram_bot

# 3. Confirmar que el .env tiene INDEXER_SQLITE_PATH
grep INDEXER_SQLITE_PATH .env

# 4. Rebuild + restart
pnpm run build
pm2 restart telegram-bot

# 5. Ver logs
pm2 logs telegram-bot --lines 80 --nostream
```

> `pnpm run build` ejecuta `tsc && prisma generate`. Si el `tsc` falla, **no sigas**:
> el proceso anterior sigue corriendo con el código viejo.

---

## 8. Cómo verificar que quedó funcionando

### 8.1 La API responde

```bash
curl -s "https://api.hoglet.xyz/api/tokens/0x8fd1550a61055c1406e04d1a0ddf7049d00c889b59f6823f21ca7d842e1eaf3c"
```

Debe devolver `{"data":{...,"symbol":"JONES","decimals":8,...}}`.
Si devuelve `404`, el problema es de DNS/CDN, no del bot.

### 8.2 El bot resuelve el token

```bash
pm2 logs telegram-bot --lines 200 --nostream | grep -i "hogletApi\|spikeMonitor"
```

- Si aparece `[hogletApi] ... respondió 404` → el token no está en D1.
- Si aparece `[spikeMonitor] No se pudo resolver el token ...` → mismo problema, y
  ahora **por fin se ve en los logs**.

### 8.3 El bot encuentra velas (LA PRUEBA CRÍTICA)

Con el bot corriendo, en el log **no debe** aparecer `Error checking for spikes`.
Para confirmar que hay velas de verdad:

```bash
# sqlite3 no siempre está instalado; alternativa con node
cd /ruta/al/proyecto/telegram_bot
node -e '
const {PrismaClient} = require("./dist/generated/supabase");
' 2>/dev/null

# O directamente sobre el archivo (si tenés sqlite3)
sqlite3 "RUTA/REAL/al/dev.db" \
  "SELECT COUNT(*) FROM OhlcData WHERE timeframe='"'"'1m'"'"';"
```

Ese número **tiene que ser > 0**. Si es `0` o la tabla no existe, `INDEXER_SQLITE_PATH`
apunta al archivo equivocado. Volvé a §6.

### 8.4 Prueba end-to-end del comando

En un grupo donde el bot sea admin, con el token configurado:

```
/settoken 0x8fd1550a61055c1406e04d1a0ddf7049d00c889b59f6823f21ca7d842e1eaf3c
```

Debe responder: `The token for the spike monitor has been set to: JONES (0x8fd1…)`

Probá también con un address **inválido** a propósito: tiene que responder que no lo
encontró en el registro. Si te dice "An error occurred", hay un problema de red o de
configuración del bot.

### 8.5 Estado actual de la configuración

Un solo monitor está habilitado en producción:

| Chat | Habilitado | Token |
|---|---|---|
| `-1002711144701` | ✅ sí | `0x8fd1550a…` (JONES) |
| `-1002468844607` | no | `0xfec11647…::memecoins::SPIKE` |
| `-1003091651241` | no | `0x6253eb8c…::NANA::NANA` |
| `-4800776487` | no | `0xe54b9592…::Coin::Pecky` |

Los tres deshabilitados guardan el token en **formato legacy** (`0x…::module::Name`).
Ese formato **no se puede resolver** contra la API. Si querés activar alguno,
pasale la **dirección FA canónica** (hex plano, sin `::`). El bot guarda siempre la
dirección canónica que le devuelve D1, así que a futuro no se repite el problema.

---

## 9. No toques esto

Decisiones tomadas a propósito. No parecen un bug, pero lo son si las "arreglás".

### ❌ No agregar columnas a D1 ni tocar `d1-sync-worker`

Se evaluó agregar `numId` y los campos de supply a `tokens_v2` para eliminar la tabla
local de Postgres. **Se descartó**: ese Worker sirve al AMM entero y está en producción.
El radio de impacto no vale la pena. `wrangler.toml` además es autoritativo: un deploy
puede romper el frontend.

### ❌ No borres la tabla `tokens_v2` de Postgres del bot

Todavía se usa, pero **no como fuente de identidad**. Quedó solo para los campos que D1
no expone:

- `numId` → clave corta de los botones de gráfico (`chart.ts:26`)
- `circulatingSupply` / `maxSupply` → `calculateMarketCap`

Para identidad, precio y símbolo, usar siempre `hogletApi`.

**Aviso importante:** de esa tabla **nadie escribe**. Es un snapshot congelado de
**65 filas**, de las cuales solo 2 tienen `originalCoinType` y ninguna tiene
`maxSupply` real. Los market caps que muestra `/chart` salen de ahí, así que **son
estimaciones con supply viejo**. Fuera de esas 65 filas la respuesta `null` es lo
esperado, no un error. Está documentado en `common.ts`.

Si algún día se quieren charts para los ~35k tokens de D1 en vez de 65, el camino es
quitar del caption las líneas de Market Cap y Supply. Eso es 100% del bot, sin tocar
el AMM. No se hizo porque implicaría **perderle datos al usuario**.

### ❌ No vuelvas a meter un fetch directo a la API

Todo el consumo de D1 pasa por `app/lib/hogletApi.ts`. Tiene el cache, el manejo de
errores y el `res.ok`. Un `fetch` suelto en otro archivo es exactamente el bug que se
arregló.

### ❌ No pases tokens legacy a `/settoken`

`0x…::module::Name` no resuelve. Usá siempre la dirección FA canónica.

---

## 10. Archivos tocados en este cambio

```
telegram_bot/app/lib/hogletApi.ts          NUEVO — único cliente de D1
telegram_bot/app/lib/spikeMonitor.ts       usa hogletApi + INDEXER_SQLITE_PATH
telegram_bot/app/functions/commands/admin.ts    /settoken valida contra D1
telegram_bot/app/functions/commands/price.ts    lee spikeMonitorTokenId directo
telegram_bot/app/functions/common.ts        sin relation a tokens_v2 + documentación
```

Sin cambios en: contratos, base de datos, `d1-sync-worker`, `amm_indexer`,
`spike_indexer`.

TypeScript compila limpio en los cinco archivos.

---

## 11. Lo que sigue pendiente

- [ ] **`INDEXER_SQLITE_PATH` definido y verificado** (§6, §8.3) ← lo bloqueante
- [ ] `/price` sigue funcionando (usa la ruta nueva sin relation)
- [ ] Decidir si se migran los 3 monitores deshabilitados a dirección FA canónica
- [ ] Opcional: `pm2 startup` para que el bot levante solo tras un reboot del VPS

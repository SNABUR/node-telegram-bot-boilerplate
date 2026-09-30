// `dotenv/config` se carga explícitamente (y no por accidente a través del import
// de `db/drizzle`) porque este módulo lee process.env al evaluarse y también se
// usa desde `commands/admin.ts`, que no arrastra esa cadena de imports.
import "dotenv/config";
import cache from "./cache.js";

/**
 * ÚNICA fuente de verdad de metadata de tokens para el bot: la API pública del
 * worker `d1-sync-worker` (amm-api), que sirve la tabla `tokens_v2` de D1.
 *
 * Por qué no la tabla `tokens_v2` local de Postgres: aquella es un dataset viejo
 * y más pobre (65 filas, ids en formato legacy coin type `0x…::module::Name`) que
 * además ya no se sincroniza. D1 es la fuente ordenada y verificada
 * (`verified`, `displayOrder`, `originalCoinType`, `metadataStandard`).
 *
 * El dominio es el custom domain declarado en
 * `d1-sync-worker/workers/amm-api/wrangler.toml` —esa lista de `routes` es
 * autoritativa y un deploy borra del dashboard cualquier dominio ausente—, por lo
 * que nunca se debe hardcodear el subdominio `*.workers.dev`.
 */
const HOGLET_API_URL = process.env.HOGLET_API_URL || "https://api.hoglet.xyz";

const TOKEN_CACHE_TTL_SECONDS = 60;

/** Fila de `tokens_v2` en D1 (join con `token_stats`). */
export type HogletToken = {
    id: string;
    network: string;
    name: string;
    symbol: string;
    decimals: number;
    iconUri: string | null;
    projectUri: string | null;
    originalCoinType: string | null;
    metadataStandard: string | null;
    verified: boolean;
    priceUsdCurrent: string | null;
    priceAnchor: string | null;
};

/**
 * Busca un token por id o por `originalCoinType`.
 *
 * Ojo con la forma de la respuesta: `/api/tokens/:id` devuelve `data` como objeto
 * único, mientras que `/api/tokens?search=` lo devuelve como array. Aquí se usa
 * siempre el lookup exacto, que el propio worker documenta como más barato y
 * seguro que `?search=` (con un address de 64 hex el LIKE revienta D1 con 500).
 *
 * @returns El token, o `null` si no existe / el worker no responde.
 */
export const getHogletTokenById = async (tokenId: string): Promise<HogletToken | null> => {
    const cacheKey = `hoglet-token-${tokenId}`;
    const cached = cache.get<HogletToken>(cacheKey);
    if (cached) {
        return cached;
    }

    try {
        const res = await fetch(`${HOGLET_API_URL}/api/tokens/${tokenId}`);

        if (!res.ok) {
            // 404 = el token no está en D1. No es un fallo de red: se registra
            // igual porque significa que el monitor quedaría inactivo.
            console.error(
                `[hogletApi] ${HOGLET_API_URL}/api/tokens/${tokenId} respondió ${res.status}`
            );
            return null;
        }

        const json = await res.json();
        const token: HogletToken | null = json?.data ?? null;

        if (token) {
            cache.set(cacheKey, token, TOKEN_CACHE_TTL_SECONDS);
        }

        return token;
    } catch (e) {
        console.error(`[hogletApi] Error consultando token ${tokenId}:`, e);
        return null;
    }
};

export default { getHogletTokenById };

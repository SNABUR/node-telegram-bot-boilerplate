import { PrismaClient as BotPrismaClient, GroupConfiguration, Token } from "../../dist/generated/supabase";
import { PrismaClient as IndexerPrismaClient } from "../../../amm_indexer/prisma/generated/sqlite";
import cron from "node-cron";
import bot from "../functions/telegraf.js";
import cache from "./cache.js";

// --- Configuración ---
const POLLING_INTERVAL_SECONDS = 30;
// Ya no necesitamos TIME_WINDOW_MINUTES para la consulta principal
const INITIAL_LOOKBACK_MINUTES = 2; // Ventana para la primera vez que se ejecuta
const SPIKE_THRESHOLD_PERCENTAGE = 0; // 5%

// --- Conexiones a las Bases de Datos ---
const botPrisma = new BotPrismaClient();
const indexerPrisma = new IndexerPrismaClient();

/**
 * Verifica la actividad de precios para un grupo y notifica si hay un "spike".
 * (Implementación con "Watermark")
 */
async function checkAndNotify(config: GroupConfiguration & { spikeMonitorToken: Token | null }) {
    if (!config.spikeMonitorEnabled || !config.spikeMonitorToken) {
        return;
    }

    const {
        chatId,
        spikeMonitorToken,
        spikeMonitorThreadId,
        spikeMonitorGifUrl,
    } = config;

    const tokenAddress = spikeMonitorToken.address;

    // --- LÓGICA DE WATERMARK ---
    // 1. Obtener el timestamp del último registro procesado desde la caché.
    const lastProcessedTimestampCacheKey = `last-processed-timestamp-${tokenAddress}`;
    const lastProcessedTimestamp = cache.get<Date>(lastProcessedTimestampCacheKey);

    // Si no hay nada en caché (primera ejecución), miramos hacia atrás un tiempo prudencial.
    const queryStartTime = lastProcessedTimestamp
        ? lastProcessedTimestamp
        : new Date(new Date().getTime() - INITIAL_LOOKBACK_MINUTES * 60 * 1000);

    try {
        // 2. Consultar todos los registros MÁS NUEVOS que el último procesado.
        const recentOhlcData = await indexerPrisma.ohlcData.findMany({
            where: {
                OR: [
                    { token0Address: tokenAddress },
                    { token1Address: tokenAddress },
                ],
                timeframe: "1m",
                timestamp: {
                    gt: queryStartTime, // 'gt' (greater than) en lugar de 'gte'
                },
                volume: {
                    gt: 0,
                },
            },
            orderBy: {
                timestamp: "asc", // Crucial: procesar en orden cronológico
            },
        });

        // Si no hay datos nuevos, no hacemos nada.
        if (recentOhlcData.length === 0) {
            return;
        }

        // El bucle ahora solo procesa datos genuinamente nuevos.
        for (const ohlcData of recentOhlcData) {
            const { open, close, volume, timestamp } = ohlcData;

            if (open.equals(0)) {
                continue;
            }

            const percentageChange = close.sub(open).div(open).mul(100);

            if (percentageChange.abs().gte(SPIKE_THRESHOLD_PERCENTAGE)) {
                // La lógica de envío de mensaje es la misma
                const otherTokenAddress = ohlcData.token0Address === tokenAddress
                    ? ohlcData.token1Address
                    : ohlcData.token0Address;

                const chartUrl = `https://chart.spikey.fun/es/5m/${tokenAddress}`;
                const swapUrl = `https://swap.spikey.fun/en?inputCurrency=${otherTokenAddress}&outputCurrency=${tokenAddress}`;

                const changeIcon = percentageChange.gte(0) ? "📈" : "📉";
                const sign = percentageChange.gte(0) ? "+" : "";
                const formattedChange = `${sign}${percentageChange.toFixed(2)}%`;
                const priceFormatted = close.toFixed(8);
                const volumeFormatted = volume.toFixed(2);
                const tokenSymbol = spikeMonitorToken.symbol;

                const message =
`🚨 *${tokenSymbol} Price Spike Alert!* ${changeIcon}\n\n` +
`📈 *Change:* ${formattedChange} in the last minute.\n` + // ajustado para ser más preciso
`💵 *Price:* ${priceFormatted}\n` +
`📊 *Volume:* ${volumeFormatted} ${tokenSymbol} \n\n` +
`[📊 Chart](${chartUrl}) | [💸 Swap](${swapUrl})`;

                const gifUrl = spikeMonitorGifUrl || "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3NmaTlycGY4dmpuenVuaGZ6ZG16NTlhcHNmYjBhaW0xNnByNnNiMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mFrsaK0gIRY9V70W2v/giphy.gif";
                const targetChatId = String(chatId);
                const targetThreadId = spikeMonitorThreadId ? Number(spikeMonitorThreadId) : undefined;

                await bot.telegram.sendAnimation(targetChatId, gifUrl, {
                    caption: message,
                    parse_mode: "Markdown",
                    message_thread_id: targetThreadId,
                });

                console.log(`Spike alert sent for token ${tokenSymbol} to group ${targetChatId}`);
            }
        }

        // --- LÓGICA DE WATERMARK ---
        // 3. Actualizar el marcador con el timestamp del ÚLTIMO elemento del lote.
        // El TTL (tercer parámetro) puede ser largo, ya que solo necesitamos el valor más reciente.
        const newLatestTimestamp = recentOhlcData[recentOhlcData.length - 1].timestamp;
        cache.set(lastProcessedTimestampCacheKey, newLatestTimestamp, 24 * 60 * 60); // Cache por 24 horas

    } catch (error) {
        // Importante: Si hay un error, NO actualizamos el timestamp,
        // para que el próximo intento vuelva a procesar estos datos.
        console.error(`Error checking for spikes for group ${chatId}:`, error);
    }
}

// ... El resto de tu código (checkAllMonitors, startSpikeMonitor) puede permanecer igual.

/**
 * Busca todas las configuraciones de monitores activos y las procesa.
 */
async function checkAllMonitors() {
    const cacheKey = "active-monitor-configs";
    let activeMonitors = cache.get<any[]>(cacheKey);

    if (!activeMonitors) {
        const monitorsFromDb = await botPrisma.groupConfiguration.findMany({
            where: {
                spikeMonitorEnabled: true,
            },
            include: {
                spikeMonitorToken: true,
            },
        });
        // Cache for 60 seconds
        cache.set(cacheKey, monitorsFromDb, 60);
        activeMonitors = monitorsFromDb;
    }

    if (activeMonitors.length > 0) {
        await Promise.all(activeMonitors.map(config => checkAndNotify(config)));
    }
}

/**
 * Inicia el servicio cron que verifica periódicamente todos los monitores activos.
 */
export const startSpikeMonitor = () => {
    cron.schedule(`*/${POLLING_INTERVAL_SECONDS} * * * * *`, checkAllMonitors);
    console.log(`Spike Monitor service started. Checking every ${POLLING_INTERVAL_SECONDS} seconds for spikes >= ${SPIKE_THRESHOLD_PERCENTAGE}%.`);
};

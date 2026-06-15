import { PrismaClient as IndexerPrismaClient } from "../../../amm_indexer/prisma/generated/sqlite";
import cron from "node-cron";
import bot from "../functions/telegraf.js";
import cache from "./cache.js";

// Importar Drizzle y el esquema V2 en lugar de BotPrismaClient
import { getDb, group_configuration, tokens_v2 } from '../db/drizzle';
import { eq } from "drizzle-orm";

// --- Configuración ---
const POLLING_INTERVAL_SECONDS = 30;
const INITIAL_LOOKBACK_MINUTES = 2; // Ventana para la primera vez que se ejecuta
const SPIKE_THRESHOLD_PERCENTAGE = 0; // 5%

// --- Conexiones a las Bases de Datos ---
const indexerPrisma = new IndexerPrismaClient();

type ConfigWithToken = {
    config: typeof group_configuration.$inferSelect;
    token: typeof tokens_v2.$inferSelect | null;
};

/**
 * Verifica la actividad de precios para un grupo y notifica si hay un "spike".
 */
async function checkAndNotify({ config, token }: ConfigWithToken) {
    if (!config.spikeMonitorEnabled || !token) {
        return;
    }

    const {
        chatId,
        spikeMonitorThreadId,
        spikeMonitorGifUrl,
    } = config;

    const tokenAddress = token.id;

    // --- LÓGICA DE WATERMARK ---
    const lastProcessedTimestampCacheKey = `last-processed-timestamp-${tokenAddress}`;
    const lastProcessedTimestamp = cache.get<Date>(lastProcessedTimestampCacheKey);

    const queryStartTime = lastProcessedTimestamp
        ? lastProcessedTimestamp
        : new Date(new Date().getTime() - INITIAL_LOOKBACK_MINUTES * 60 * 1000);

    try {
        // 2. Consultar todos los registros MÁS NUEVOS que el último procesado. (SQLite OHLCDB no cambia)
        const recentOhlcData = await indexerPrisma.ohlcData.findMany({
            where: {
                OR: [
                    { token0Address: tokenAddress },
                    { token1Address: tokenAddress },
                ],
                timeframe: "1m",
                timestamp: {
                    gt: queryStartTime,
                },
                volume: {
                    gt: 0,
                },
            },
            orderBy: {
                timestamp: "asc",
            },
        });

        if (recentOhlcData.length === 0) {
            return;
        }

        for (const ohlcData of recentOhlcData) {
            const { open, close, volume, timestamp } = ohlcData;

            if (open.equals(0)) {
                continue;
            }

            const percentageChange = close.sub(open).div(open).mul(100);

            if (percentageChange.abs().gte(SPIKE_THRESHOLD_PERCENTAGE)) {
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
                const tokenSymbol = token.symbol;

                const message =
`🚨 *${tokenSymbol} Price Spike Alert!* ${changeIcon}\n\n` +
`📈 *Change:* ${formattedChange} in the last minute.\n` + 
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

        const newLatestTimestamp = recentOhlcData[recentOhlcData.length - 1].timestamp;
        cache.set(lastProcessedTimestampCacheKey, newLatestTimestamp, 24 * 60 * 60);

    } catch (error) {
        console.error(`Error checking for spikes for group ${chatId}:`, error);
    }
}

/**
 * Busca todas las configuraciones de monitores activos en Drizzle V2 y las procesa.
 */
async function checkAllMonitors() {
    const cacheKey = "active-monitor-configs";
    let activeMonitors = cache.get<ConfigWithToken[]>(cacheKey);

    if (!activeMonitors) {
        const db = await getDb();
        const rows = await db.select()
            .from(group_configuration)
            // @ts-ignore
            .leftJoin(tokens_v2, eq(group_configuration.spikeMonitorTokenId, tokens_v2.id))
            // @ts-ignore
            .where(eq(group_configuration.spikeMonitorEnabled, true));

        const monitorsFromDb: ConfigWithToken[] = rows.map((r: any) => ({
            config: r.group_configuration,
            token: r.tokens_v2,
        }));
        
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

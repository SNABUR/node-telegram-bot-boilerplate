import { PrismaClient as BotPrismaClient, GroupConfiguration, Token } from "../../dist/generated/supabase";
import { PrismaClient as IndexerPrismaClient } from "../../../amm_indexer/prisma/dist/generated/sqlite";
import cron from "node-cron";
import bot from "../functions/telegraf.js";
import { Decimal } from "@prisma/client/runtime/library";
import cache from "./cache.js";

// --- Configuración ---
const POLLING_INTERVAL_SECONDS = 30;
const TIME_WINDOW_MINUTES = 2;
const SPIKE_THRESHOLD_PERCENTAGE = 0; // 5% de cambio para considerarse un spike

// --- Conexiones a las Bases de Datos ---
const botPrisma = new BotPrismaClient();
const indexerPrisma = new IndexerPrismaClient();

/**
 * Verifica la actividad de precios para un grupo y notifica si hay un "spike".
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

    const now = new Date();
    const timeWindowStart = new Date(now.getTime() - TIME_WINDOW_MINUTES * 60 * 1000);
    const tokenAddress = spikeMonitorToken.address;

    try {
        const ohlcData = await indexerPrisma.ohlcData.findFirst({
            where: {
                OR: [
                    { token0Address: tokenAddress },
                    { token1Address: tokenAddress },
                ],
                timeframe: "1m",
                timestamp: {
                    gte: timeWindowStart,
                },
                volume: {
                    gt: 0,
                },
            },
            orderBy: {
                timestamp: "desc",
            },
        });

        if (ohlcData) {
            const { open, close, volume } = ohlcData;
            if (open.equals(0)) return;

            const percentageChange = close.sub(open).div(open).mul(100);

            if (percentageChange.abs().gte(SPIKE_THRESHOLD_PERCENTAGE)) {
                const changeIcon = percentageChange.gte(0) ? "📈" : "📉";
                const sign = percentageChange.gte(0) ? "+" : "";
                const formattedChange = `${sign}${percentageChange.toFixed(2)}%`;
                const priceFormatted = close.toFixed(8);
                const volumeFormatted = volume.toFixed(2);
                const tokenSymbol = spikeMonitorToken.symbol;

                const message =
`*${tokenSymbol} Price Spike Alert!* ${changeIcon}\n\n` +
`A price change of *${formattedChange}* was detected in the last ${TIME_WINDOW_MINUTES} minute(s).\n\n` +
`*Current Price:* ${priceFormatted}\n` +
`*Volume:* ${volumeFormatted}`;

                const gifUrl = spikeMonitorGifUrl || "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3l2bnRzNjd6eXo2dGtyZ3g2cTYxY2Y2Y21pY2hnbWN6Y2I1bW5pbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YkYk5A4E3d3y8/giphy.gif";
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
    } catch (error) {
        console.error(`Error checking for spikes for group ${chatId}:`, error);
    }
}

/**
 * Busca todas las configuraciones de monitores activos y las procesa.
 */
async function checkAllMonitors() {
    const cacheKey = 'active-monitor-configs';
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
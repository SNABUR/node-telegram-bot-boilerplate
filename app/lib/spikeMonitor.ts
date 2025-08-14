import { PrismaClient } from "../../../amm_indexer/generated/sqlite";
import cron from "node-cron";
import bot from "../functions/telegraf.js";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

// --- Configuración ---
// Es recomendable mover estos valores a variables de entorno (.env) para mayor seguridad y flexibilidad.
const SPIKE_TOKEN_ADDRESS = process.env.SPIKE_TOKEN_ADDRESS || "0xfec116479f1fd3cb9732cc768e6061b0e45b178a610b9bc23c2143a6493e794::memecoins::SPIKE";
const TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID || "-1002468844607";
const THREAD_ID = process.env.TELEGRAM_THREAD_ID || "11541";

// URL del GIF que se enviará. ¡Puedes cambiarlo por el que más te guste!
const SPIKE_GIF_URL = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXE0YXJlZmt3cnhkdXlxenlwZGZjeDR5OWdzaXJudmoxYWYxaHV6bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EWIiv7izSd4J51tntS/giphy.gif";

const POLLING_INTERVAL_SECONDS = 30;
const TIME_WINDOW_MINUTES = 2;

/**
 * Busca la actividad reciente del token SPIKE y envía una notificación a Telegram si se encuentra.
 */
async function checkAndNotifySpikeActivity() {
    const now = new Date();
    const timeWindowStart = new Date(now.getTime() - TIME_WINDOW_MINUTES * 60 * 1000);

    try {
        const ohlcData = await prisma.ohlcData.findFirst({
            where: {
                OR: [
                    { token0Address: SPIKE_TOKEN_ADDRESS },
                    { token1Address: SPIKE_TOKEN_ADDRESS },
                ],
                timeframe: "1m",
                timestamp: {
                    gte: timeWindowStart,
                    lt: now,
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
            // Solo necesitamos 'open' para el cálculo, pero no lo mostraremos.
            const { open, close, volume, tradeCount } = ohlcData;

            // Cálculo de la variación porcentual
            let percentageChange = new Decimal(0);
            if (open.gt(0)) {
                percentageChange = close.sub(open).div(open).mul(100);
            }
            const changeIcon = percentageChange.gte(0) ? "📈" : "📉";
            const sign = percentageChange.gte(0) ? "+" : "";
            const formattedChange = `${sign}${percentageChange.toFixed(2)}%`;
            const priceFormatted = close.toFixed(8);
            const volumeFormatted = volume.toFixed(2);

            const message = `*SPIKE Price Movement* ${changeIcon}

A 1-minute candle just closed with a *${formattedChange}* change!

*Price:* \`${priceFormatted}\`
*Volume:* \`${volumeFormatted}\`
*Trades:* \`${tradeCount}\`

View on DexScreener`;

            // Usamos sendAnimation para enviar el GIF con el mensaje como caption
            await bot.telegram.sendAnimation(TELEGRAM_GROUP_ID, SPIKE_GIF_URL, {
                caption: message,
                parse_mode: "Markdown",
                message_thread_id: THREAD_ID,
            });

            console.log("SPIKE activity message sent!");
        } else {
            console.log(`No new SPIKE token activity in the last ${TIME_WINDOW_MINUTES} minutes.`);
        }
    } catch (error) {
        console.error("Error checking SPIKE token activity:", error);
    }
}

/**
 * Inicia el trabajo cron que monitorea la actividad del token SPIKE.
 */
export const startSpikeMonitor = () => {
    cron.schedule(`*/${POLLING_INTERVAL_SECONDS} * * * * *`, checkAndNotifySpikeActivity);
    console.log(`Spike monitor started. Checking every ${POLLING_INTERVAL_SECONDS} seconds.`);
};

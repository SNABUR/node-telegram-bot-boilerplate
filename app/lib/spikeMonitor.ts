
import { PrismaClient } from "../../../amm_indexer_prices/generated/sqlite";
import cron from "node-cron";
import bot from "../functions/telegraf.js"; // Assuming this is the correct path to your bot instance

const prisma = new PrismaClient();

const TOKEN_0_ADDRESS = "0X1::supra_coin::SupraCoin";
const TOKEN_ADDRESS = "0xfec116479f1fd3cb9732cc768e6061b0e45b178a610b9bc23c2143a6493e794::memecoins::SPIKE";
const TELEGRAM_GROUP_ID = "-1002468844607"; // Replace with your actual group ID

export const startSpikeMonitor = () => {
    cron.schedule("* * * * *", async () => {
        console.log("Checking for SPIKE token activity...");
        const now = new Date();
        const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);

        console.log(`Querying for TOKEN_ADDRESS: ${TOKEN_ADDRESS}`);
        console.log(`Time range: ${oneMinuteAgo.toISOString()} to ${now.toISOString()}`);

        try {
            const spikeToken = await prisma.token.findFirst({
                where: {
                    address: TOKEN_ADDRESS,
                },
            });

            if (!spikeToken) {
                console.log(`Token with address ${TOKEN_ADDRESS} not found in DB.`);
                return;
            }

            const ohlcData = await prisma.ohlcData.findMany({
                where: {
                    token1Address: TOKEN_ADDRESS,
                    timeframe: "1m",
                    timestamp: {
                        gte: oneMinuteAgo,
                        lt: now,
                    },
                    volume: {
                        gt: 0,
                    },
                },
                orderBy: {
                    timestamp: "desc",
                },
                take: 1,
            });

            console.log(`Found ${ohlcData.length} OHLC data entries.`);
            if (ohlcData.length > 0) {
                console.log("OHLC Data found:", ohlcData[0]);
                const data = ohlcData[0];
                const message = `
🚀 **SPIKE Token Activity Detected!** 🚀

Timeframe: ${data.timeframe}
Timestamp: ${data.timestamp.toLocaleString()}
Open: ${data.open.toFixed(8)}
High: ${data.high.toFixed(8)}
Low: ${data.low.toFixed(8)}
Close: ${data.close.toFixed(8)}
Volume: ${data.volume.toFixed(8)}
Trade Count: ${data.tradeCount}

Check the charts for more details!
                `;
                await bot.telegram.sendMessage(TELEGRAM_GROUP_ID, message, { parse_mode: "Markdown" });
                console.log("SPIKE activity message sent!");
            } else {
                console.log("No SPIKE token activity in the last minute.");
            }
        } catch (error) {
            console.error("Error checking SPIKE token activity:", error);
        }
    });
};

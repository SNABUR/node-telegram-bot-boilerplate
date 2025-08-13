import bot from "../telegraf.js";
import { Context } from "telegraf";
import prisma from "../../lib/prisma.js";

/**
 * command: /price
 * =====================
 * Get OHLC price data
 *
 */
export const price = async (): Promise<void> => {
	bot.command("price", async (ctx: Context) => {
		if (!ctx.message) {
			return;
		}
		const now = Math.floor(Date.now() / 1000);
		if (now - ctx.message.date > 120) {
			return; // Ignore old commands
		}
		try {
			const latestOhlc = await prisma.ohlcData.findFirst({
				orderBy: {
					timestamp: "desc",
				},
			});

			if (latestOhlc) {
				const token0 = await prisma.token.findFirst({ where: { address: latestOhlc.token0Address } });
				const token1 = await prisma.token.findFirst({ where: { address: latestOhlc.token1Address } });

				if (token0 && token1) {
					const message =
						`Latest Price for ${token0.symbol}/${token1.symbol}:\n` +
						`Open: ${latestOhlc.open}\n` +
						`High: ${latestOhlc.high}\n` +
						`Low: ${latestOhlc.low}\n` +
						`Close: ${latestOhlc.close}\n` +
						`Volume: ${latestOhlc.volume}\n` +
						`Timestamp: ${latestOhlc.timestamp.toLocaleString()}`;
					ctx.reply(message, { reply_parameters: { message_id: ctx.message.message_id } });
				} else {
					ctx.reply("Could not find token data for the latest price.", {
						reply_parameters: { message_id: ctx.message.message_id },
					});
				}
			} else {
				ctx.reply("No price data available.", { reply_parameters: { message_id: ctx.message.message_id } });
			}
		} catch (error) {
			console.error("Error fetching price data:", error);
			if (!ctx.message) {
				return;
			}
			ctx.telegram.sendMessage(ctx.message.chat.id, "An error occurred while fetching price data.");
		}
	});
};

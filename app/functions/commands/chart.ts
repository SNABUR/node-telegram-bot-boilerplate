import bot from "../telegraf.js";
import { generateOhlcChart } from "../chartGenerator.js";
import { Context } from "telegraf";
import prisma from "../../lib/prisma.js";

import {
	SUPRA_COIN_ADDRESS,
	SPIKE_TOKEN_ADDRESS,
	JOSH_TOKEN_ADDRESS,
	BABYJOSH_TOKEN_ADDRESS,
	calculateMarketCap,
    getCachedTokenByAddress, // Import the new cached function
} from "../common.js";

// Helper function to escape special characters for MarkdownV2
const escapeMarkdownV2 = (text: string): string => {
	const specialChars = /[_*[\\\]()~`#+\-=|{}.!]/g;
	return text.replace(specialChars, "\\$&");
};

export const sendChart = async (ctx: any, tokenAddress: string, timeframe: string, isUpdate = false) => {
	let loadingMessageId: number | undefined;

	try {
		if (!isUpdate) {
			const loadingMessage = await ctx.reply("⏳ Loading chart, please wait...");
			loadingMessageId = loadingMessage.message_id;
		}

		// Find SupraCoin and target token using the cache
		const supraCoin = await getCachedTokenByAddress(SUPRA_COIN_ADDRESS);
		const targetToken = await getCachedTokenByAddress(tokenAddress);

		if (!supraCoin) {
			ctx.reply("SupraCoin not found in database. Please check configuration.");
			return;
		}

		if (!targetToken) {
			ctx.reply("Target token not found. Please provide a valid token address.");
			return;
		}

		const [sortedAddress0, sortedAddress1] = [supraCoin.address, targetToken.address].sort();

		// Fetch OHLC data
		const ohlcData = await prisma.ohlcData.findMany({
			where: {
				token0Address: sortedAddress0,
				token1Address: sortedAddress1,
				timeframe: timeframe,
			},
			orderBy: {
				timestamp: "desc",
			},
			take: 100,
		});

		ohlcData.reverse();

		if (ohlcData.length === 0) {
			ctx.reply(
				`No OHLC data available for ${targetToken.symbol}/${supraCoin.symbol} in the ${timeframe} timeframe.`,
			);
			return;
		}

		const latestOhlc = ohlcData[ohlcData.length - 1];
		const firstOhlc = ohlcData[0];

		const currentPrice = latestOhlc.close.toNumber();
		const priceChange =
			((latestOhlc.close.toNumber() - firstOhlc.open.toNumber()) / firstOhlc.open.toNumber()) * 100;
		const lastUpdate = latestOhlc.timestamp;

		const chartBuffer = await generateOhlcChart(ohlcData);

		const { marketCap, maxSupply } = await calculateMarketCap(tokenAddress);

		let caption = `📊 *${escapeMarkdownV2(targetToken.symbol)} Price Information*\n\n`;
		caption += `• 1 ${escapeMarkdownV2(supraCoin.symbol)} \\= ${escapeMarkdownV2(
			currentPrice !== 0 ? (1 / currentPrice).toFixed(targetToken.decimals > 8 ? 8 : 3) : "N/A",
		)} ${escapeMarkdownV2(targetToken.symbol)}\n`;
		caption += `• 1 ${escapeMarkdownV2(targetToken.symbol)} \\= ${escapeMarkdownV2(
			currentPrice.toFixed(8),
		)} ${escapeMarkdownV2(supraCoin.symbol)}\n`;
		caption += `💹 *Market Cap:* $${escapeMarkdownV2(
			marketCap !== null
				? marketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
				: "0",
		)}\n`;
		caption += `🔢 *Supply:* ${escapeMarkdownV2(maxSupply !== null ? maxSupply.toLocaleString() : "0")}\n\n`;
		caption += `📈 *Price Changes*\n`;
		caption += `• ${timeframe}: ${escapeMarkdownV2(priceChange.toFixed(2))}%${priceChange >= 0 ? " 🚀" : " 📉"}\n`;
		caption += `⏰ *Last Updated:* ${escapeMarkdownV2(lastUpdate.toLocaleString())}`;

		const reply_markup = {
			inline_keyboard: [
				[
					{
						text: "🔄 Refresh",
						callback_data: `chart_refresh_${targetToken.id}_${timeframe}`,
					},
				],
				[
					{ text: "5m", callback_data: `chart_timeframe_${targetToken.id}_5m` },
					{ text: "1h", callback_data: `chart_timeframe_${targetToken.id}_1h` },
					{ text: "1d", callback_data: `chart_timeframe_${targetToken.id}_1d` },
				],
			],
		};

		try {
			if (isUpdate) {
				await ctx.editMessageMedia(
					{
						type: "photo",
						media: { source: chartBuffer },
						caption: caption,
						parse_mode: "MarkdownV2",
					},
					{
						reply_markup: reply_markup,
					}
				);
			} else {
				await ctx.replyWithPhoto(
					{ source: chartBuffer },
					{
						caption: caption,
						parse_mode: "MarkdownV2",
						reply_markup: reply_markup,
						reply_to_message_id: ctx.message?.message_id,
						message_thread_id: ctx.message?.message_thread_id,
					}
				);
			}
		} catch (error: any) {
			if (error.message.includes("message is not modified")) {
				if (isUpdate) {
					await ctx.answerCbQuery("Chart is already up to date.");
				}
			} else {
				console.error("Error updating chart:", error);
				if (isUpdate) {
					await ctx.answerCbQuery("An error occurred while updating the chart.");
				} else {
					await ctx.reply("An error occurred while updating the chart.", {
						reply_to_message_id: ctx.message?.message_id,
						message_thread_id: ctx.message?.message_thread_id,
					});
				}
			}
		}
	} catch (error) {
		console.error("Error generating chart:", error);
		if (isUpdate) {
			await ctx.answerCbQuery("An error occurred while generating the chart.");
		} else {
			await ctx.reply("An error occurred while generating the chart.", {
				reply_to_message_id: ctx.message?.message_id,
				message_thread_id: ctx.message?.message_thread_id,
			});
		}
	} finally {
		if (loadingMessageId) {
			await ctx.deleteMessage(loadingMessageId);
		}
	}
};

const createTokenChartCommand = (tokenAddress: string) => {
	return async (ctx: any) => {
		if (!ctx.message) {
			return;
		}
		const now = Math.floor(Date.now() / 1000);
		if (now - ctx.message.date > 120) {
			return; // Ignore old commands
		}
		const timeframe = "5m"; // Default to 5m
		await sendChart(ctx, tokenAddress, timeframe);
	};
};

export const spike = async (): Promise<void> => {
	bot.command("spike", createTokenChartCommand(SPIKE_TOKEN_ADDRESS));
};

export const josh = async (): Promise<void> => {
	bot.command("josh", createTokenChartCommand(JOSH_TOKEN_ADDRESS));
};

export const babyjosh = async (): Promise<void> => {
	bot.command("babyjosh", createTokenChartCommand(BABYJOSH_TOKEN_ADDRESS));
};

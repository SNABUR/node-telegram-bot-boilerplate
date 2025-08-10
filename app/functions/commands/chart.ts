import bot from "../telegraf.js";
import { generateOhlcChart } from "../chartGenerator.js";
import { Context } from "telegraf";
import prisma from "../../lib/prisma.js";

import {
	SUPRA_COIN_ADDRESS,
	SPIKE_TOKEN_ADDRESS,
	JOSH_TOKEN_ADDRESS,
	BABYJOSH_TOKEN_ADDRESS,
	getUserPreference,
	calculateMarketCap,
} from "../common.js";

// Helper function to escape special characters for MarkdownV2
const escapeMarkdownV2 = (text: string): string => {
	const specialChars = /[_*[\]()~`#+\-=|{}.!]/g;
	return text.replace(specialChars, "\\$&");
};

export const sendChart = async (ctx: any, tokenAddress: string, timeframe: string, isUpdate = false) => {
	try {
		// Find SupraCoin token
		const supraCoin = await prisma.token.findFirst({
			where: { address: SUPRA_COIN_ADDRESS },
		});

		if (!supraCoin) {
			ctx.reply("SupraCoin not found in database. Please check configuration.");
			return;
		}

		// Find the target token
		const targetToken = await prisma.token.findFirst({
			where: { address: tokenAddress },
		});

		if (!targetToken) {
			ctx.reply("Target token not found. Please provide a valid token address.");
			return;
		}

		// Find the pair (SupraCoin always token0 for consistency)
		const pair = await prisma.pair.findFirst({
			where: {
				OR: [
					{ token0Id: supraCoin.id, token1Id: targetToken.id },
					{ token0Id: targetToken.id, token1Id: supraCoin.id },
				],
			},
		});

		if (!pair) {
			ctx.reply(`Pair for ${targetToken.symbol}/${supraCoin.symbol} not found.`);
			return;
		}

		// Fetch OHLC data
		const ohlcData = await prisma.ohlcData.findMany({
			where: {
				pairId: pair.id,
				timeframe: timeframe,
			},
			orderBy: {
				timestamp: "desc",
			},
			take: 100,
		});

		// Reverse the data to have it in chronological order for the chart
		ohlcData.reverse();

		if (ohlcData.length === 0) {
			ctx.reply(
				`No OHLC data available for ${targetToken.symbol}/${supraCoin.symbol} in ${timeframe} timeframe.`,
			);
			return;
		}

		// Calculate additional metrics
		const latestOhlc = ohlcData[ohlcData.length - 1];
		const firstOhlc = ohlcData[0];

		const currentPrice = latestOhlc.close.toNumber();
		const priceChange =
			((latestOhlc.close.toNumber() - firstOhlc.open.toNumber()) / firstOhlc.open.toNumber()) * 100;
		const lastUpdate = latestOhlc.timestamp;

		// Generate chart
		const chartBuffer = await generateOhlcChart(ohlcData);

		// Calculate Market Cap
		const { marketCap, maxSupply } = await calculateMarketCap(tokenAddress);

		// Build caption with structured format and emojis
		// Build caption with structured format and emojis
		let caption = `📊 *${escapeMarkdownV2(targetToken.symbol)} Price Information*\n\n`;
		caption += `• 1 ${escapeMarkdownV2(supraCoin.symbol)} \\= ${escapeMarkdownV2(
			currentPrice !== 0
				? (1 / currentPrice).toFixed(targetToken.decimals > 8 ? 8 : targetToken.decimals)
				: "N/A",
		)} ${escapeMarkdownV2(targetToken.symbol)}\n`;
		caption += `• 1 ${escapeMarkdownV2(targetToken.symbol)} \\= ${escapeMarkdownV2(
			currentPrice.toFixed(8),
		)} ${escapeMarkdownV2(supraCoin.symbol)}\n`;
		caption += `💹 *Market Cap:* \\$${escapeMarkdownV2(
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
				// If it's an update, edit the existing message
				await ctx.editMessageMedia(
					{
						type: "photo",
						media: { source: chartBuffer },
						caption: caption,
						parse_mode: "MarkdownV2",
					},
					{
						reply_markup: reply_markup,
					},
				);
			} else {
				// Otherwise, send a new message
				await ctx.replyWithPhoto(
					{ source: chartBuffer },
					{
						caption: caption,
						parse_mode: "MarkdownV2",
						reply_markup: reply_markup,
						reply_to_message_id: ctx.message?.message_id,
						message_thread_id: ctx.message?.message_thread_id,
					},
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
	}
};

/**
 * command: /chart
 * =====================
 * Display price chart for a token pair
 */
export const chart = async (): Promise<void> => {
	bot.command("chart", async (ctx: any) => {
		if (!ctx.message) {
			return;
		}
		const now = Math.floor(Date.now() / 1000);
		if (now - ctx.message.date > 120) {
			return; // Ignore old commands
		}
		const userId = BigInt(ctx.from.id);
		const args = ctx.message.text?.split(" ") || [];
		let targetTokenAddress: string | undefined;
		let targetTimeframe: string | undefined;

		// Check for arguments
		if (args.length > 1) {
			targetTokenAddress = args[1];
			if (args.length > 2) {
				targetTimeframe = args[2];
			}
		}

		const userPref = await getUserPreference(userId);
		const tokenAddress = targetTokenAddress || userPref?.defaultTokenAddress;
		const timeframe = targetTimeframe || userPref?.defaultTimeframe || "5m";

		if (!tokenAddress) {
			ctx.telegram.sendMessage(
				ctx.message.chat.id,
				"Please specify a token address (e.g., /chart <token_address>) or set a default with /settoken.",
			);
			return;
		}

		await sendChart(ctx, tokenAddress, timeframe);
	});
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

/**
 * command: /spike
 * =====================
 * Display price chart for SPIKE token
 */
export const spike = async (): Promise<void> => {
	bot.command("spike", createTokenChartCommand(SPIKE_TOKEN_ADDRESS));
};

/**
 * command: /josh
 * =====================
 * Display price chart for JOSH token
 */
export const josh = async (): Promise<void> => {
	bot.command("josh", createTokenChartCommand(JOSH_TOKEN_ADDRESS));
};

/**
 * command: /babyjosh
 * =====================
 * Display price chart for BABYJOSH token
 */
export const babyjosh = async (): Promise<void> => {
	bot.command("babyjosh", createTokenChartCommand(BABYJOSH_TOKEN_ADDRESS));
};

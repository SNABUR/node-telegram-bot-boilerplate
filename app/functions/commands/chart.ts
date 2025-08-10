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

		// Generate chart
		const chartBuffer = await generateOhlcChart(ohlcData);

		// Calculate Market Cap
		const { marketCap, maxSupply } = await calculateMarketCap(tokenAddress);
		let caption = `Price Chart for ${targetToken.symbol}/${supraCoin.symbol} (${timeframe})`;
		if (marketCap !== null) {
			caption += `\nMarket Cap: ${marketCap.toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})}`;
		}
		caption += `\nMax Supply: ${maxSupply !== null ? maxSupply.toLocaleString() : 0}`;
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
						reply_markup: reply_markup,
						reply_to_message_id: ctx.message?.message_id,
						message_thread_id: ctx.message?.message_thread_id,
					},
				);
			}
		} catch (error: any) {
			if (error.message.includes("message is not modified")) {
				await ctx.answerCbQuery("Chart is already up to date.");
			} else {
				console.error("Error updating chart:", error);
				await ctx.answerCbQuery("An error occurred while updating the chart.");
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
 *
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
 *
 */
export const spike = async (): Promise<void> => {
	bot.command("spike", createTokenChartCommand(SPIKE_TOKEN_ADDRESS));
};

/**
 * command: /josh
 * =====================
 * Display price chart for JOSH token
 *
 */
export const josh = async (): Promise<void> => {
	bot.command("josh", createTokenChartCommand(JOSH_TOKEN_ADDRESS));
};

/**
 * command: /babyjosh
 * =====================
 * Display price chart for BABYJOSH token
 *
 */
export const babyjosh = async (): Promise<void> => {
	bot.command("babyjosh", createTokenChartCommand(BABYJOSH_TOKEN_ADDRESS));
};

/**
 * Telegraf Commands
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import bot from "@app/functions/telegraf";
import * as databases from "@app/functions/databases";
import config from "@configs/config";
import { launchPolling, launchWebhook } from "./launcher";
import { PrismaClient, UserPreference } from "@app/generated/prisma";
import { generateOhlcChart } from "./chartGenerator";

const prisma = new PrismaClient();

const SUPRA_COIN_ADDRESS = "0x1::supra_coin::SupraCoin";

// Helper function to get user preferences
const getUserPreference = async (userId: bigint): Promise<UserPreference | null> => {
	return prisma.userPreference.findUnique({
		where: { userId: userId },
	});
};

// Helper function to set user preferences
const setUserPreference = async (
	userId: bigint,
	data: { defaultTokenAddress?: string; defaultTimeframe?: string },
): Promise<UserPreference> => {
	return prisma.userPreference.upsert({
		where: { userId: userId },
		update: data,
		create: { userId: userId, ...data },
	});
};

/**
 * command: /quit
 * =====================
 * If user exit from bot
 *
 */
const quit = async (): Promise<void> => {
	bot.command("quit", (ctx) => {
		ctx.telegram.leaveChat(ctx.message.chat.id);
		ctx.leaveChat();
	});
};

/**
 * command: /photo
 * =====================
 * Send photo from picsum to chat
 *
 */
const sendPhoto = async (): Promise<void> => {
	bot.command("photo", (ctx) => {
		ctx.replyWithPhoto("https://picsum.photos/200/300/");
	});
};

/**
 * command: /start
 * =====================
 * Send welcome message
 *
 */
const start = async (): Promise<void> => {
	bot.start((ctx) => {
		databases.writeUser(ctx.update.message.from);

		ctx.telegram.sendMessage(ctx.message.chat.id, `Welcome! Try send /photo command or write any text`);
	});
};

/**
 * command: /price
 * =====================
 * Get OHLC price data
 *
 */
const price = async (): Promise<void> => {
	bot.command("price", async (ctx) => {
		try {
			const latestOhlc = await prisma.ohlcData.findFirst({
				orderBy: {
					timestamp: "desc",
				},
				include: {
					pair: {
						include: {
							token0: true,
							token1: true,
						},
					},
				},
			});

			if (latestOhlc) {
				const message =
					`Latest Price for ${latestOhlc.pair.token0.symbol}/${latestOhlc.pair.token1.symbol}:
` +
					`Open: ${latestOhlc.open}
` +
					`High: ${latestOhlc.high}
` +
					`Low: ${latestOhlc.low}
` +
					`Close: ${latestOhlc.close}
` +
					`Volume: ${latestOhlc.volume}
` +
					`Timestamp: ${latestOhlc.timestamp.toLocaleString()}`;
				ctx.reply(message);
			} else {
				ctx.reply("No price data available.");
			}
		} catch (error) {
			console.error("Error fetching price data:", error);
			ctx.reply("An error occurred while fetching price data.");
		}
	});
};

/**
 * command: /settoken
 * =====================
 * Set user's default token for charts
 *
 */
const setToken = async (): Promise<void> => {
	bot.command("settoken", async (ctx) => {
		const args = ctx.message.text.split(" ");
		if (args.length < 2) {
			ctx.reply("Usage: /settoken <token_address>");
			return;
		}
		const tokenAddress = args[1];
		const userId = BigInt(ctx.from.id);

		try {
			const token = await prisma.token.findFirst({
				where: { address: tokenAddress },
			});

			if (!token) {
				ctx.reply("Token not found. Please provide a valid token address.");
				return;
			}

			await setUserPreference(userId, { defaultTokenAddress: tokenAddress });
			ctx.reply(`Default token set to ${token.symbol} (${tokenAddress}).`);
		} catch (error) {
			console.error("Error setting default token:", error);
			ctx.reply("An error occurred while setting your default token.");
		}
	});
};

/**
 * command: /settimeframe
 * =====================
 * Set user's default timeframe for charts
 *
 */
const setTimeframe = async (): Promise<void> => {
	bot.command("settimeframe", async (ctx) => {
		const args = ctx.message.text.split(" ");
		if (args.length < 2) {
			ctx.reply("Usage: /settimeframe <timeframe> (e.g., 1m, 5m, 1h)");
			return;
		}
		const timeframe = args[1];
		const userId = BigInt(ctx.from.id);

		// Basic validation for timeframe
		const validTimeframes = ["1m", "5m", "1h", "1d"]; // Add more as needed
		if (!validTimeframes.includes(timeframe)) {
			ctx.reply(`Invalid timeframe. Please use one of: ${validTimeframes.join(", ")}`);
			return;
		}

		try {
			await setUserPreference(userId, { defaultTimeframe: timeframe });
			ctx.reply(`Default timeframe set to ${timeframe}.`);
		} catch (error) {
			console.error("Error setting default timeframe:", error);
			ctx.reply("An error occurred while setting your default timeframe.");
		}
	});
};

/**
 * command: /chart
 * =====================
 * Display price chart for a token pair
 *
 */
const chart = async (): Promise<void> => {
	bot.command("chart", async (ctx) => {
		const userId = BigInt(ctx.from.id);
		const args = ctx.message.text.split(" ");
		let targetTokenAddress: string | undefined;
		let targetTimeframe: string | undefined;

		// Check for arguments
		if (args.length > 1) {
			targetTokenAddress = args[1];
			if (args.length > 2) {
				targetTimeframe = args[2];
			}
		}

		try {
			const userPref = await getUserPreference(userId);

			// Use user preference or default
			const tokenAddress = targetTokenAddress || userPref?.defaultTokenAddress;
			const timeframe = targetTimeframe || userPref?.defaultTimeframe || "1m"; // Default to 1m if not set

			if (!tokenAddress) {
				ctx.reply(
					"Please specify a token address (e.g., /chart <token_address>) or set a default with /settoken.",
				);
				return;
			}

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
					timestamp: "asc",
				},
				take: 100, // Limit to last 100 data points for chart
			});

			if (ohlcData.length === 0) {
				ctx.reply(
					`No OHLC data available for ${targetToken.symbol}/${supraCoin.symbol} in ${timeframe} timeframe.`,
				);
				return;
			}

			// Generate chart
			const chartBuffer = await generateOhlcChart(ohlcData);

			// Send chart as photo
			await ctx.replyWithPhoto(
				{ source: chartBuffer },
				{ caption: `Price Chart for ${targetToken.symbol}/${supraCoin.symbol} (${timeframe})` },
			);
		} catch (error) {
			console.error("Error generating chart:", error);
			ctx.reply("An error occurred while generating the chart.");
		}
	});
};

/**
 * command: /help
 * =====================
 * Display available commands
 *
 */
const help = async (): Promise<void> => {
	bot.command("help", (ctx) => {
		const helpMessage =
			`Available commands:
` +
			`/start - Start the bot
` +
			`/help - Display this help message
` +
			`/price - Get the latest OHLC price data
` +
			`/photo - Get a random photo
` +
			`/chart [token_address] [timeframe] - Display price chart
` +
			`/settoken <token_address> - Set your default token for charts
` +
			`/settimeframe <timeframe> - Set your default timeframe for charts (e.g., 1m, 5m, 1h)
` +
			`/quit - Stop the bot`;
		ctx.reply(helpMessage);
	});
};

/**
 * Run bot
 * =====================
 * Send welcome message
 *
 */
const launch = async (): Promise<void> => {
	const mode = config.mode;
	if (mode === "webhook") {
		launchWebhook();
	} else {
		launchPolling();
	}
};

export { launch, quit, sendPhoto, start, price, help, setToken, setTimeframe, chart };
export default launch;

import bot from "../telegraf.js";
import { Context } from "telegraf";
import { setUserPreference, isAdmin } from "../common.js";
import prisma from "../../lib/prisma.js";

/**
 * command: /settoken
 * =====================
 * Set user's default token for charts
 *
 */
export const setToken = async (): Promise<void> => {
	bot.command("settoken", async (ctx: any) => {
		if (!ctx.message) {
			return;
		}
		if (!(await isAdmin(ctx))) {
			return ctx.telegram.sendMessage(ctx.message.chat.id, "Sorry, only admins can use this command.");
		}
		if (!("text" in ctx.message)) {
			return ctx.telegram.sendMessage(ctx.message.chat.id, "Please send a text message with the token address.");
		}
		const args = ctx.message.text.split(" ");
		if (args.length < 2) {
			ctx.telegram.sendMessage(ctx.message.chat.id, "Usage: /settoken <token_address>");
			return;
		}
		const tokenAddress = args[1];
		if (!ctx.from) {
			return;
		}
		const userId = BigInt(ctx.from.id);

		try {
			const token = await prisma.token.findFirst({
				where: { address: tokenAddress },
			});

			if (!token) {
				ctx.telegram.sendMessage(ctx.message.chat.id, "Token not found. Please provide a valid token address.");
				return;
			}

			await setUserPreference(userId, { defaultTokenAddress: tokenAddress });
			ctx.telegram.sendMessage(ctx.message.chat.id, `Default token set to ${token.symbol} (${tokenAddress}).`);
		} catch (error) {
			console.error("Error setting default token:", error);
			ctx.telegram.sendMessage(ctx.message.chat.id, "An error occurred while setting your default token.");
		}
	});
};

/**
 * command: /settimeframe
 * =====================
 * Set user's default timeframe for charts
 *
 */
export const setTimeframe = async (): Promise<void> => {
	bot.command("settimeframe", async (ctx: any) => {
		if (!ctx.message) {
			return;
		}
		if (!(await isAdmin(ctx))) {
			return ctx.telegram.sendMessage(ctx.message.chat.id, "Sorry, only admins can use this command.");
		}
		if (!("text" in ctx.message)) {
			return ctx.telegram.sendMessage(ctx.message.chat.id, "Please send a text message with the timeframe.");
		}
		const args = ctx.message.text.split(" ");
		if (args.length < 2) {
			ctx.telegram.sendMessage(ctx.message.chat.id, "Usage: /settimeframe <timeframe> (e.g., 1m, 5m, 1h)");
			return;
		}
		const timeframe = args[1];
		if (!ctx.from) {
			return;
		}
		const userId = BigInt(ctx.from.id);

		// Basic validation for timeframe
		const validTimeframes = ["1m", "5m", "1h", "1d"]; // Add more as needed
		if (!validTimeframes.includes(timeframe)) {
			ctx.telegram.sendMessage(
				ctx.message.chat.id,
				`Invalid timeframe. Please use one of: ${validTimeframes.join(", ")}`,
			);
			return;
		}

		try {
			await setUserPreference(userId, { defaultTimeframe: timeframe });
			ctx.telegram.sendMessage(ctx.message.chat.id, `Default timeframe set to ${timeframe}.`);
		} catch (error) {
			console.error("Error setting default timeframe:", error);
			ctx.telegram.sendMessage(ctx.message.chat.id, "An error occurred while setting your default timeframe.");
		}
	});
};

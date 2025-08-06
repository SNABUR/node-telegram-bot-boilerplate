import bot from "@app/functions/telegraf";
import { prisma, setUserPreference, isAdmin } from "@app/functions/common";

/**
 * command: /settoken
 * =====================
 * Set user's default token for charts
 *
 */
export const setToken = async (): Promise<void> => {
	bot.command("settoken", async (ctx) => {
		if (!(await isAdmin(ctx))) {
			return ctx.reply("Sorry, only admins can use this command.", {
				reply_to_message_id: ctx.message.message_id,
			});
		}
		const args = ctx.message.text.split(" ");
		if (args.length < 2) {
			ctx.reply("Usage: /settoken <token_address>", { reply_to_message_id: ctx.message.message_id });
			return;
		}
		const tokenAddress = args[1];
		const userId = BigInt(ctx.from.id);

		try {
			const token = await prisma.token.findFirst({
				where: { address: tokenAddress },
			});

			if (!token) {
				ctx.reply("Token not found. Please provide a valid token address.", {
					reply_to_message_id: ctx.message.message_id,
				});
				return;
			}

			await setUserPreference(userId, { defaultTokenAddress: tokenAddress });
			ctx.reply(`Default token set to ${token.symbol} (${tokenAddress}).`, {
				reply_to_message_id: ctx.message.message_id,
			});
		} catch (error) {
			console.error("Error setting default token:", error);
			ctx.reply("An error occurred while setting your default token.", {
				reply_to_message_id: ctx.message.message_id,
			});
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
	bot.command("settimeframe", async (ctx) => {
		if (!(await isAdmin(ctx))) {
			return ctx.reply("Sorry, only admins can use this command.", {
				reply_to_message_id: ctx.message.message_id,
			});
		}
		const args = ctx.message.text.split(" ");
		if (args.length < 2) {
			ctx.reply("Usage: /settimeframe <timeframe> (e.g., 1m, 5m, 1h)", {
				reply_to_message_id: ctx.message.message_id,
			});
			return;
		}
		const timeframe = args[1];
		const userId = BigInt(ctx.from.id);

		// Basic validation for timeframe
		const validTimeframes = ["1m", "5m", "1h", "1d"]; // Add more as needed
		if (!validTimeframes.includes(timeframe)) {
			ctx.reply(`Invalid timeframe. Please use one of: ${validTimeframes.join(", ")}`, {
				reply_to_message_id: ctx.message.message_id,
			});
			return;
		}

		try {
			await setUserPreference(userId, { defaultTimeframe: timeframe });
			ctx.reply(`Default timeframe set to ${timeframe}.`, { reply_to_message_id: ctx.message.message_id });
		} catch (error) {
			console.error("Error setting default timeframe:", error);
			ctx.reply("An error occurred while setting your default timeframe.", {
				reply_to_message_id: ctx.message.message_id,
			});
		}
	});
};

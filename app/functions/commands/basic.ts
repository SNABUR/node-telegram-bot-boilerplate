import bot from "@app/functions/telegraf";
import * as databases from "@app/functions/databases";
import { isAdmin } from "@app/functions/common";

/**
 * command: /quit
 * =====================
 * If user exit from bot
 *
 */
export const quit = async (): Promise<void> => {
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
export const sendPhoto = async (): Promise<void> => {
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
export const start = async (): Promise<void> => {
	bot.start((ctx) => {
		databases.writeUser(ctx.update.message.from);

		ctx.telegram.sendMessage(ctx.message.chat.id, `Welcome! Try send /photo command or write any text`);
	});
};

/**
 * command: /help
 * =====================
 * Display available commands
 *
 */
export const help = async (): Promise<void> => {
	bot.command("help", (ctx) => {
		const now = Math.floor(Date.now() / 1000);
		if (now - ctx.message.date > 120) {
			return; // Ignore old commands
		}
		const helpMessage =
			`Available commands:\n` +
			`/start - Start the bot\n` +
			`/help - Display this help message\n` +
			`/price - Get the latest OHLC price data\n` +
			`/photo - Get a random photo\n` +
			`/chart [token_address] [timeframe] - Display price chart\n` +
			`/spike - Display price chart for SPIKE token (1m timeframe)\n` +
		`/josh - Display price chart for JOSH token (1m timeframe)\n` +
		`/babyjosh - Display price chart for BABYJOSH token (1m timeframe)\n` +
			`/settoken <token_address> - Set your default token for charts\n` +
			`/settimeframe <timeframe> - Set your default timeframe for charts (e.g., 1m, 5m, 1h)\n` +
			`/quit - Stop the bot`;
		ctx.reply(helpMessage, { reply_to_message_id: ctx.message.message_id });
	});
};

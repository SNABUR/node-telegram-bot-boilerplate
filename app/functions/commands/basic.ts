import bot from "../telegraf.js";
import { Context } from "telegraf";
import * as databases from "../databases.js";

/**
 * Handles the /start command.
 * Welcomes the user and registers them in the database.
 */
export const start = async (): Promise<void> => {
	bot.start((ctx: any) => {
		if (!ctx.update.message) {
			return;
		}
		databases.writeUser(ctx.update.message.from);
		if (!ctx.message) {
			return;
		}
		const welcomeMessage = `Welcome to the Price Bot! 🚀\n\nUse /help to see all available commands.`;
		ctx.telegram.sendMessage(ctx.message.chat.id, welcomeMessage);
	});
};

/**
 * Handles the /help command.
 * Displays a detailed list of all available commands for both users and admins.
 */
export const help = async (): Promise<void> => {
	bot.command("help", (ctx: Context) => {
		if (!ctx.message) {
			return;
		}
		// Ignore commands that are older than 2 minutes to prevent spam
		const now = Math.floor(Date.now() / 1000);
		if (now - ctx.message.date > 120) {
			return;
		}

		const helpMessage = `
			*🤖 General Commands*

			/start - Initializes the bot and shows a welcome message.
			/help - Displays this help message.
			/price - Shows the price chart for the token configured for this group.
			/spike - Shortcut to show the price chart for the SPIKE token.
			/babyjosh - Shortcut to show the price chart for the BABYJOSH token.

			*🛠️ Admin Commands*

			/monitor - Toggles the price spike monitor ON or OFF. When turning ON, alerts will be posted in the thread where the command is used.
			/settoken <address> - Sets the token for the /price command and the spike monitor.
			/setgif <url> - Sets a custom GIF for spike alert notifications.
			/quit - Commands the bot to leave the chat.
		`;

		ctx.telegram.sendMessage(ctx.message.chat.id, helpMessage, { parse_mode: 'Markdown' });
	});
};

/**
 * Handles the /quit command.
 * Forces the bot to leave the chat where the command is issued.
 */
export const quit = async (): Promise<void> => {
	bot.command("quit", (ctx: any) => {
		if (!ctx.message) {
			return;
		}
		ctx.telegram.leaveChat(ctx.message.chat.id);
		ctx.leaveChat();
	});
};
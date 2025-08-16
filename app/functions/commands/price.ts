import bot from "../telegraf.js";
import { sendChart } from "./chart.js";
import { getCachedGroupConfiguration } from "../common.js";

/**
 * command: /price
 * =====================
 * Display price chart for the token configured for the group
 */
export const price = async (): Promise<void> => {
	bot.command("price", async (ctx: any) => {
		if (ctx.chat.type === 'private') {
			return ctx.reply('This command only works in groups.');
		}

		try {
            // Use the cached function to get the group configuration
			const groupConfig = await getCachedGroupConfiguration(ctx.chat.id);

			if (!groupConfig || !groupConfig.spikeMonitorToken) {
				return ctx.reply('No token has been configured for this group. An admin can set one using /settoken <token_address>');
			}

			const tokenAddress = groupConfig.spikeMonitorToken.address;
			const timeframe = "5m"; // Default to 5m
			await sendChart(ctx, tokenAddress, timeframe);

		} catch (error) {
			console.error("Error handling /price command:", error);
			await ctx.reply("An error occurred while processing the command.");
		}
	});
};
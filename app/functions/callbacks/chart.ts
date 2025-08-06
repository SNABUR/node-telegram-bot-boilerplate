import bot from "@app/functions/telegraf";
import { prisma } from "@app/functions/common";
import { sendChart } from "@app/functions/commands/chart";

/**
 * callback_query: chart
 * =====================
 * Handle chart-related callback queries
 *
 */
export const chartCallback = async (): Promise<void> => {
	bot.on("callback_query", async (ctx) => {
		const callbackData = (ctx.callbackQuery as any).data;
		if (!callbackData || !callbackData.startsWith("chart_")) {
			return;
		}

		const parts = callbackData.split("_");
		const action = parts[1];
		const tokenId = parseInt(parts[2], 10);
		let timeframe = parts[3];

		const token = await prisma.token.findUnique({ where: { id: tokenId } });
		if (!token) {
			ctx.answerCbQuery("Token not found.");
			return;
		}

		const tokenAddress = token.address;

		if (action === "refresh") {
			await sendChart(ctx, tokenAddress, timeframe, true);
			await ctx.answerCbQuery("Chart refreshed!");
		} else if (action === "timeframe") {
			timeframe = parts[3];
			await sendChart(ctx, tokenAddress, timeframe, true);
			await ctx.answerCbQuery(`Timeframe set to ${timeframe}`);
		}
	});
};
import bot from "../telegraf.js";
import prisma from "../../lib/prisma.js";
import { sendChart } from "./chart.js";

/**
 * command: /price
 * =====================
 * Display price chart for the token configured for the group
 */
export const price = async (): Promise<void> => {
	bot.command("price", async (ctx: any) => {
		if (ctx.chat.type === 'private') {
			return ctx.reply('Este comando solo funciona en grupos.');
		}

		try {
			const groupConfig = await prisma.groupConfiguration.findUnique({
				where: { chatId: ctx.chat.id },
				include: { spikeMonitorToken: true },
			});

			if (!groupConfig || !groupConfig.spikeMonitorToken) {
				return ctx.reply('No se ha configurado un token para este grupo. Un administrador puede configurar uno usando /settoken <token_address>');
			}

			const tokenAddress = groupConfig.spikeMonitorToken.address;
			const timeframe = "5m"; // Default to 5m
			await sendChart(ctx, tokenAddress, timeframe);

		} catch (error) {
			console.error("Error handling /price command:", error);
			await ctx.reply("Ocurrió un error al procesar el comando.");
		}
	});
};
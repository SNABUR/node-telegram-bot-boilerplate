import bot from "../functions/telegraf.js";
import * as command from "../functions/commands.js";
import * as hears from "../functions/hears.js";
import { startSpikeMonitor } from "../lib/spikeMonitor.js";

/**
 * Start bot
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptk.dev> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

bot.catch((err: any, ctx: any) => {
	console.error(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

(async () => {
	try {
		await command.quit();
		await command.start();
		await command.sendPhoto();
		await command.price();
		await command.help();
		await command.setToken();
		await command.setTimeframe();
		await command.chart();
		await command.spike();
		await command.josh();
		await command.babyjosh();
		await command.chartCallback();
		await hears.text();

		startSpikeMonitor(); // Start the SPIKE token monitor

		console.log("Bot starting...");
		await command.launch();
		console.log("Bot stopped.");
	} catch (error) {
		console.error("Bot crashed with an error:", error);
	}
})();

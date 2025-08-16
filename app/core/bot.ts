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
    // Basic commands
		await command.quit();
		await command.start();
		await command.help();

    // Price and chart commands
		await command.price();
		await command.spike();
		await command.josh();
		await command.babyjosh();

	// Admin commands
		await command.chatid();
		await command.settoken();
		await command.monitor();
		await command.setgif();


    // Callbacks
		await command.chartCallback();

    // Hears
		await hears.text();

		startSpikeMonitor(); // Start the SPIKE token monitor

		console.log("Bot starting...");
		await command.launch();
		console.log("Bot stopped.");
	} catch (error) {
		console.error("Bot crashed with an error:", error);
	}
})();

import * as command from "@app/functions/commands";
import * as hears from "@app/functions/hears";

/**
 * Start bot
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptk.dev> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
(async () => {
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
	await command.launch();
})();

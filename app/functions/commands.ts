/**
 * Telegraf Commands
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptk.dev> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

import config from "../configs/config.js";
import { launchPolling, launchWebhook } from "./launcher.js";

// Import and re-export all command modules
export * from "./commands/basic.js";
export * from "./commands/chart.js";
export * from "./commands/preferences.js";
export * from "./commands/price.js";
export * from "./callbacks/chart.js";

/**
 * Run bot
 * =====================
 * Send welcome message
 *
 */
export const launch = async (): Promise<void> => {
	const mode = config.mode;
	if (mode === "webhook") {
		launchWebhook();
	} else {
		launchPolling();
	}
};

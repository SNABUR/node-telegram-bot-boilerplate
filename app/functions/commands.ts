/**
 * Telegraf Commands
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptk.dev> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

import config from "@configs/config";
import { launchPolling, launchWebhook } from "./launcher";

// Import and re-export all command modules
export * from "./commands/basic";
export * from "./commands/chart";
export * from "./commands/preferences";
export * from "./callbacks/chart";

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

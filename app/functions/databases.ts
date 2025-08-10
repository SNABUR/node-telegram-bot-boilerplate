/**
 * Database: lowdb
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import type { TelegramUserInterface } from "../types/databases.type.js";
import configs from "../configs/config.js";
// import lowdb, { FileSync } from "lowdb";

// const databases = { users: lowdb(new lowdbFileSync<{ users: TelegramUserInterface[] }>(configs.databases.users)) as any };

// databases.users = lowdb(new lowdbFileSync(configs.databases.users)) as any;
// (databases.users as any).defaults({ users: [] }).write();

/**
 * writeUser()
 * =====================
 * Write user information from telegram context to user database
 *
 * @Context: ctx.update.message.from
 *
 * @interface [TelegramUserInterface](https://github.com/ptkdev-boilerplate/node-telegram-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
 *
 * @param { TelegramUserInterface } json - telegram user object
 *
 */
const writeUser = async (json: TelegramUserInterface): Promise<void> => {
	// const user_id = (databases.users as any).get("users").find({ id: json.id }).value();
	//
	// if (user_id) {
	//     (databases.users as any).get("users").find({ id: user_id.id }).assign(json).write();
	// } else {
	//     (databases.users as any).get("users").push(json).write();
	// }
	console.warn("lowdb writeUser function is commented out. No data will be written."); // Add a warning
};

// export { databases, writeUser };
// export default databases;

// Export a dummy object for now to avoid errors in other files that import databases
const databases = {};
export { databases, writeUser };
export default databases;

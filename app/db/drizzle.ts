import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { pgTable, text, boolean, integer, bigint, timestamp, numeric } from "drizzle-orm/pg-core";
import * as dotenv from 'dotenv';
dotenv.config();


export const group_configuration = pgTable("group_configuration", {
  chatId: bigint("chatId", { mode: "number" }).primaryKey(), // Telegram chat IDs can be large, use number mode
  spikeMonitorEnabled: boolean("spikeMonitorEnabled").default(false).notNull(),
  spikeMonitorTokenId: text("spikeMonitorTokenId"),
  spikeMonitorThreadId: text("spikeMonitorThreadId"),
  spikeMonitorGifUrl: text("spikeMonitorGifUrl"),
  spikeMonitorTimeframe: integer("spikeMonitorTimeframe").default(2),
  spikeMonitorInterval: integer("spikeMonitorInterval").default(30),
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

let dbInstance: any = null;

export async function getDb() {
  if (!dbInstance) {
    dbInstance = drizzle(pool);
  }
  return dbInstance!;
}

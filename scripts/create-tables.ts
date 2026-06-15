import { getDb } from '../app/db/drizzle';
import { sql } from 'drizzle-orm';

async function main() {
  const db = await getDb();
  console.log('Creating tables in Telegram Bot DB...');
  
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "tokens_v2" (
      "id" text PRIMARY KEY,
      "network" text NOT NULL,
      "name" text NOT NULL,
      "symbol" text NOT NULL,
      "decimals" integer NOT NULL
    );
  `);
  
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "group_configuration" (
      "chatId" bigint PRIMARY KEY,
      "spikeMonitorEnabled" boolean DEFAULT false NOT NULL,
      "spikeMonitorTokenId" text REFERENCES "tokens_v2"("id"),
      "spikeMonitorThreadId" text,
      "spikeMonitorGifUrl" text,
      "spikeMonitorTimeframe" integer DEFAULT 2,
      "spikeMonitorInterval" integer DEFAULT 30
    );
  `);
  
  console.log('Tables created successfully in Bot DB!');
}

main().catch(console.error).finally(() => process.exit(0));

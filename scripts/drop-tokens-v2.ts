import { getDb } from '../app/db/drizzle';
import { sql } from 'drizzle-orm';

async function main() {
  const db = await getDb();
  console.log('Dropping tokens_v2 foreign key from group_configuration...');
  
  try {
    await db.execute(sql`
      ALTER TABLE "group_configuration" DROP CONSTRAINT IF EXISTS "group_configuration_spikeMonitorTokenId_tokens_v2_id_fk";
    `);
    await db.execute(sql`
      ALTER TABLE "group_configuration" DROP CONSTRAINT IF EXISTS "group_configuration_spikeMonitorTokenId_fkey";
    `);
  } catch (e) {
    console.log('Could not drop constraints (maybe they do not exist)', e);
  }

  console.log('Dropping tokens_v2 table...');
  try {
    await db.execute(sql`DROP TABLE IF EXISTS "tokens_v2" CASCADE;`);
  } catch(e) {
    console.log('Could not drop tokens_v2', e);
  }
  
  console.log('Done!');
}

main().catch(console.error).finally(() => process.exit(0));

import { getDb } from '../app/db/drizzle';
import { sql } from 'drizzle-orm';

async function main() {
  const db = await getDb();
  console.log('Checking tables in telegram_bot DB...');
  
  const res = await db.execute(sql`
    SELECT relname 
    FROM pg_class 
    WHERE relname IN ('tokens_v2', 'group_configuration');
  `);
  
  console.log('Tables found:', res.rows.map((r: any) => r.relname));
}

main().catch(console.error).finally(() => process.exit(0));

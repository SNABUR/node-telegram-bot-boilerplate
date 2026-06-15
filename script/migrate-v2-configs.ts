import { PrismaClient as BotPrismaClient } from "../dist/generated/supabase/index.js";
import { getDb, group_configuration } from "../app/db/drizzle.js";

async function main() {
    const prisma = new BotPrismaClient();
    const db = await getDb();

    console.log("Reading old GroupConfiguration from V1 Supabase...");
    const oldConfigs = await prisma.groupConfiguration.findMany({
        include: { spikeMonitorToken: true }
    });

    console.log(`Found ${oldConfigs.length} old configurations.`);

    const newConfigs = oldConfigs.map(c => ({
        chatId: Number(c.chatId), // Convert BigInt to Number as defined in schema
        spikeMonitorEnabled: c.spikeMonitorEnabled,
        spikeMonitorTokenId: c.spikeMonitorToken?.address || null, // Convert Int token ID to string address
        spikeMonitorThreadId: c.spikeMonitorThreadId,
        spikeMonitorGifUrl: c.spikeMonitorGifUrl,
        spikeMonitorTimeframe: c.spikeMonitorTimeframe,
        spikeMonitorInterval: c.spikeMonitorInterval
    }));

    if (newConfigs.length > 0) {
        console.log("Inserting into V2 Drizzle group_configuration...");
        await db.insert(group_configuration)
            .values(newConfigs)
            .onConflictDoNothing({ target: group_configuration.chatId });
        console.log("Migration complete.");
    } else {
        console.log("Nothing to migrate.");
    }
}

main().catch(console.error).finally(() => process.exit(0));

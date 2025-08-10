import { PrismaClient } from "../app/generated/prisma/index.js";
import config from "../app/configs/config.js";

const prisma = new PrismaClient();

const SPIKE_TOKEN_ADDRESS = config.tokens.SPIKE_TOKEN_ADDRESS;
const SUPRA_COIN_ADDRESS = config.tokens.SUPRA_COIN_ADDRESS;

async function getSpikeData() {
	console.log("Starting script to fetch Spike data...");

	try {
		// 1. Find SupraCoin token
		const supraCoin = await prisma.token.findFirst({
			where: { address: SUPRA_COIN_ADDRESS },
		});

		if (!supraCoin) {
			console.error("SupraCoin not found in database. Please check configuration.");
			return;
		}
		console.log(`Found SupraCoin: ${supraCoin.symbol} (ID: ${supraCoin.id})`);

		// 2. Find the target token (SPIKE)
		const targetToken = await prisma.token.findFirst({
			where: { address: SPIKE_TOKEN_ADDRESS },
		});

		if (!targetToken) {
			console.error("Target token (SPIKE) not found. Please provide a valid token address.");
			return;
		}
		console.log(`Found Target Token: ${targetToken.symbol} (ID: ${targetToken.id})`);

		// 3. Find the pair
		const pair = await prisma.pair.findFirst({
			where: {
				OR: [
					{ token0Id: supraCoin.id, token1Id: targetToken.id },
					{ token0Id: targetToken.id, token1Id: supraCoin.id },
				],
			},
		});

		if (!pair) {
			console.error(`Pair for ${targetToken.symbol}/${supraCoin.symbol} not found.`);
			return;
		}
		console.log(`Found Pair ID: ${pair.id}`);

		// 4. Fetch OHLC data
		const ohlcData = await prisma.ohlcData.findMany({
			where: {
				pairId: pair.id,
				timeframe: "5m", // Matching the default timeframe for price checks
			},
			orderBy: {
				timestamp: "desc",
			},
			take: 100,
		});

		console.log(`
--- Fetched OHLC Data for ${targetToken.symbol}/${supraCoin.symbol} (Last ${ohlcData.length} records) ---
`);

		if (ohlcData.length === 0) {
			console.log("No OHLC data found for this pair and timeframe.");
		} else {
			// Reverse the data to show the most recent record last
			ohlcData.reverse().forEach((data: any) => {
				console.log(
					`Timestamp: ${data.timestamp.toISOString()}, Open: ${data.open}, High: ${data.high}, Low: ${
						data.low
					}, Close: ${data.close}`,
				);
			});
			console.log(`
--- Total records fetched: ${ohlcData.length} ---`);
		}
	} catch (error) {
		console.error("An error occurred during the script execution:", error);
	} finally {
		await prisma.$disconnect();
		console.log("\nScript finished and database connection closed.");
	}
}

getSpikeData();

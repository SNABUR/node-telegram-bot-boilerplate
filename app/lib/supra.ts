
import { Prisma } from "../../dist/generated/supabase";
import { callViewFunction } from "./viewFunction.js";

async function getSupraPrice(tokenId: number): Promise<string | null> {

	const ORACLE_MODULE_ADDRESS = process.env.NEXT_PUBLIC_SUPRA_ORACLE_ADDRESS_MAINNET;
	const ORACLE_MODULE_NAME = process.env.NEXT_PUBLIC_SUPRA_ORACLE_MODULE_NAME;

    if (!ORACLE_MODULE_ADDRESS || !ORACLE_MODULE_NAME) {
        console.error("Supra Oracle address or module name is not configured in environment variables.");
        return null;
    }
    const fullModulePath = `${ORACLE_MODULE_ADDRESS}::${ORACLE_MODULE_NAME}`;
    const functionName = "get_price";

    try {
        const response = await callViewFunction(fullModulePath, functionName, [], [tokenId]);

        if (response && response.result && Array.isArray(response.result) && response.result.length >= 2) {
            const rawPrice = BigInt(response.result[0]);
            const decimals = Number(response.result[1]);
            const supraPrice = Number(rawPrice) / 10 ** decimals;
            return String(supraPrice);
        } else {
            console.warn(`Unexpected response structure from ${functionName}`, response);
            return null;
        }
    } catch (error: any) {
        console.error(`Error calling view function ${functionName} for pair ${tokenId}:`, error.message);
        return null;
    }
}

/**
 * @description Fetches the price of the native token (SUPRA) in USD from the Supra oracle.
 * @returns {Promise<Prisma.Decimal>} The price of 1 SUPRA in USD.
 */
export async function getSupraPriceInUSD(): Promise<Prisma.Decimal> {
    console.log("Fetching SUPRA price in USD from Supra oracle...");
    // TODO: Get the correct pairId for SUPRA/USD from the oracle documentation or team.
    // Using placeholder 500 as found in the oracle_prices project.
    const pairId = 500;
    const price = await getSupraPrice(pairId);
    if (price) {
        return new Prisma.Decimal(price);
    }
    // Return a default/fallback value if the oracle call fails
    return new Prisma.Decimal(0);
}

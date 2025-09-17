import config from "../configs/config.js";
import prisma from "../lib/prisma.js";
import cache from "../lib/cache.js";
import { Prisma, Token, GroupConfiguration } from "../../dist/generated/supabase";
import { getSupraPriceInUSD } from "../lib/supra.js";

export const SUPRA_COIN_ADDRESS = config.tokens.SUPRA_COIN_ADDRESS;
export const SPIKE_TOKEN_ADDRESS = config.tokens.SPIKE_TOKEN_ADDRESS;
export const JOSH_TOKEN_ADDRESS = config.tokens.JOSH_TOKEN_ADDRESS;
export const BABYJOSH_TOKEN_ADDRESS = config.tokens.BABYJOSH_TOKEN_ADDRESS;

/**
 * Retrieves token data from cache if available, otherwise fetches from the database.
 * @param {string} tokenAddress The address of the token to retrieve.
 * @returns {Promise<Token | null>} The token data or null if not found.
 */
export const getCachedTokenByAddress = async (tokenAddress: string): Promise<Token | null> => {
    const cacheKey = `token-${tokenAddress}`;
    const cachedToken = cache.get<Token>(cacheKey);

    if (cachedToken) {
        return cachedToken;
    }

    const tokenFromDb = await prisma.token.findFirst({
        where: { address: tokenAddress },
    });

    if (tokenFromDb) {
        cache.set(cacheKey, tokenFromDb);
    }

    return tokenFromDb;
};

/**
 * Retrieves group configuration data from cache or database.
 * @param {number | string} chatId The ID of the chat group.
 * @returns {Promise<(GroupConfiguration & { spikeMonitorToken: Token | null }) | null>} The group configuration or null.
 */
export const getCachedGroupConfiguration = async (chatId: number | string): Promise<(GroupConfiguration & { spikeMonitorToken: Token | null }) | null> => {
    const cacheKey = `group-config-${chatId}`;
    const cachedConfig = cache.get<(GroupConfiguration & { spikeMonitorToken: Token | null })>(cacheKey);

    if (cachedConfig) {
        return cachedConfig;
    }

    const configFromDb = await prisma.groupConfiguration.findUnique({
        where: { chatId: BigInt(chatId) },
        include: { spikeMonitorToken: true },
    });

    if (configFromDb) {
        cache.set(cacheKey, configFromDb);
    }

    return configFromDb;
};


// Helper function to check if a user is an admin
export const isAdmin = async (ctx: any): Promise<boolean> => {
	if (ctx.chat.type === "private") {
		return true; // In private chat, everyone is an "admin"
	}
	const member = await ctx.getChatMember(ctx.from.id);
	return ["administrator", "creator"].includes(member.status);
};

export const calculateMarketCap = async (
	tokenAddress: string,
): Promise<{ marketCap: number | null; maxSupply: number | null }> => {
	try {
        // Use the cached function to get token data
		const targetToken = await getCachedTokenByAddress(tokenAddress);

		if (!targetToken || targetToken.circulatingSupply === null) {
			return { marketCap: null, maxSupply: null };
		}

		const supraCoinAddress = config.tokens.SUPRA_COIN_ADDRESS;

		// Get the latest closing price of the token against Supra
		const latestOhlc = await prisma.ohlcData.findFirst({
			where: {
				OR: [
					{
						token0Address: tokenAddress,
						token1Address: supraCoinAddress,
					},
					{
						token0Address: supraCoinAddress,
						token1Address: tokenAddress,
					},
				],
				timeframe: "5m",
			},
			orderBy: {
				timestamp: "desc",
			},
			select: {
				close: true,
				token0Address: true,
				token1Address: true,
			},
		});

		if (!latestOhlc) {
			return { marketCap: null, maxSupply: null };
		}

		let tokenPriceInSupra = latestOhlc.close;

		if (latestOhlc.token1Address === supraCoinAddress) {
			if (tokenPriceInSupra.isZero()) {
				return { marketCap: null, maxSupply: null };
			}
			tokenPriceInSupra = new Prisma.Decimal(1).div(tokenPriceInSupra);
		}

		const supraPriceInUsd = await getSupraPriceInUSD();
        if (supraPriceInUsd.isZero()) {
            console.error("Could not retrieve a valid Supra price from the oracle. Market cap calculation will be incorrect.");
            return { marketCap: null, maxSupply: null };
        }

        // Price of 1 token in USD
        const tokenPriceUsd = tokenPriceInSupra.mul(supraPriceInUsd);

        // Supply is already in human-readable units from the DB
        const circulatingSupply = new Prisma.Decimal(targetToken.circulatingSupply.toString());

        // Market cap is a direct multiplication
        const marketCap = tokenPriceUsd.mul(circulatingSupply);

        const maxSupply = targetToken.maxSupply
            ? new Prisma.Decimal(targetToken.maxSupply.toString())
            : null;

		return {
			marketCap: marketCap.toNumber(),
			maxSupply: maxSupply ? maxSupply.toNumber() : null,
		};
	} catch (error) {
		console.error("Error calculating market cap:", error);
		return { marketCap: null, maxSupply: null };
	}
};

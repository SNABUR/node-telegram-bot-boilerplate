import config from "../configs/config.js";
import prisma from "../lib/prisma.js";
import { Prisma, UserPreference } from "@app/generated/prisma/index.js";

export const SUPRA_COIN_ADDRESS = config.tokens.SUPRA_COIN_ADDRESS;
export const SPIKE_TOKEN_ADDRESS = config.tokens.SPIKE_TOKEN_ADDRESS;
export const JOSH_TOKEN_ADDRESS = config.tokens.JOSH_TOKEN_ADDRESS;
export const BABYJOSH_TOKEN_ADDRESS = config.tokens.BABYJOSH_TOKEN_ADDRESS;

// Helper function to get user preferences
export const getUserPreference = async (userId: bigint): Promise<UserPreference | null> => {
	return prisma.userPreference.findUnique({
		where: { userId: userId },
	});
};

// Helper function to set user preferences
export const setUserPreference = async (
	userId: bigint,
	data: { defaultTokenAddress?: string; defaultTimeframe?: string },
): Promise<UserPreference> => {
	return prisma.userPreference.upsert({
		where: { userId: userId },
		update: data,
		create: { userId: userId, ...data },
	});
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
		const targetToken = await prisma.token.findFirst({
			where: { address: tokenAddress },
			select: {
				circulatingSupply: true,
				maxSupply: true,
			},
		});

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
				timeframe: "5m", // User changed this to 5m
			},
			orderBy: {
				timestamp: "desc",
			},
			select: {
				close: true,
				token0Address: true, // Include to know the price orientation
			},
		});

		if (!latestOhlc) {
			return { marketCap: null, maxSupply: null };
		}

		let tokenPriceInSupra = latestOhlc.close; // This is already a Prisma.Decimal object

		// If token1 is Supra, the price is inverted, so we need to calculate the reciprocal
		if (latestOhlc.token1Address === supraCoinAddress) {
			if (tokenPriceInSupra.isZero()) {
				return { marketCap: null, maxSupply: null }; // Avoid division by zero
			}
			tokenPriceInSupra = new Prisma.Decimal(1).div(tokenPriceInSupra); // 2. Usar Prisma (mayúscula)
		}

		const supraPriceInUsd = new Prisma.Decimal(config.prices.SUPRA_USD_PRICE);
		const circulatingSupply = new Prisma.Decimal(targetToken.circulatingSupply.toString());

		const marketCap = tokenPriceInSupra.mul(supraPriceInUsd).mul(circulatingSupply); // No se necesita cambio aquí
		const maxSupply = targetToken.maxSupply ? new Prisma.Decimal(targetToken.maxSupply.toString()) : null;

		return {
			marketCap: marketCap.toNumber(), // Convert back to number for return type, but be aware of precision for display
			maxSupply: maxSupply ? maxSupply.toNumber() : null,
		};
	} catch (error) {
		console.error("Error calculating market cap:", error);
		return { marketCap: null, maxSupply: null };
	}
};

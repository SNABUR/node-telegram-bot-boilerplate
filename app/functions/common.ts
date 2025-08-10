import config from "../configs/config.js";
import prisma from "../lib/prisma.js";
import { UserPreference } from "@app/generated/prisma/index.js";

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
				id: true,
				circulatingSupply: true,
				maxSupply: true,
			},
		});

		if (!targetToken || targetToken.circulatingSupply === null) {
			return { marketCap: null, maxSupply: null }; // No se puede calcular el MCAP sin maxSupply
		}

		// Encontrar el par del token con SupraCoin
		const supraCoin = await prisma.token.findFirst({
			where: { address: config.tokens.SUPRA_COIN_ADDRESS },
			select: { id: true },
		});

		if (!supraCoin) {
			console.error("SupraCoin not found in database for MCAP calculation.");
			return { marketCap: null, maxSupply: null };
		}

		const pair = await prisma.pair.findFirst({
			where: {
				OR: [
					{ token0Id: supraCoin.id, token1Id: targetToken.id },
					{ token0Id: targetToken.id, token1Id: supraCoin.id },
				],
			},
			select: { id: true },
		});

		if (!pair) {
			return { marketCap: null, maxSupply: null }; // No se encontró el par para el cálculo del precio
		}

		// Obtener el último precio de cierre del token contra Supra
		const latestOhlc = await prisma.ohlcData.findFirst({
			where: {
				pairId: pair.id,
				timeframe: "1m", // Usamos 1m para el precio más reciente
			},
			orderBy: {
				timestamp: "desc",
			},
			select: {
				close: true,
			},
		});

		if (!latestOhlc) {
			return { marketCap: null, maxSupply: null }; // No hay datos de precio OHLC
		}

		const tokenPriceInSupra = parseFloat(latestOhlc.close.toString());
		const supraPriceInUsd = config.prices.SUPRA_USD_PRICE;
		const circulatingSupply = parseFloat(targetToken.circulatingSupply.toString());

		const marketCap = tokenPriceInSupra * supraPriceInUsd * circulatingSupply;
		const maxSupply = targetToken.maxSupply ? parseFloat(targetToken.maxSupply.toString()) : null;

		return { marketCap, maxSupply };
	} catch (error) {
		console.error("Error calculating market cap:", error);
		return { marketCap: null, maxSupply: null };
	}
};

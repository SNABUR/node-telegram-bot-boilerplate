export async function callViewFunction(
    modulepath: string,
    functionName: string,
    typeArgs: any[],
    args: any[]
): Promise<any> {

	const SUPRA_RPC_URL = process.env.NEXT_PUBLIC_SUPRA_RPC_URL_MAINNET || "";

    if (!SUPRA_RPC_URL) {
        throw new Error("Supra RPC URL is not configured in environment variables.");
    }

    const payload = {
        function: `${modulepath}::${functionName}`,
        type_arguments: typeArgs,
        arguments: args,
    };

    try {
        const response = await fetch(`${SUPRA_RPC_URL}/view`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error(`Error in API response (${response.status}) for ${functionName}:`, errorData);
            throw new Error(`Supra API request failed with status ${response.status}.`);
        }

        return await response.json();
    } catch (error: any) {
        console.error(`Error calling view function ${functionName}:`, error);
        throw error;
    }
}

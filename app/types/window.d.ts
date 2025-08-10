interface Window {
	chartData: {
		ohlcData: Array<{
			timestamp: string;
			open: number;
			high: number;
			low: number;
			close: number;
			volume: number;
		}>;
		width: number;
		height: number;
	};
	chartRendered: boolean;
}

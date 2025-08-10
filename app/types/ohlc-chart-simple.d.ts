declare module "ohlc-chart-simple" {
    interface Candle {
        open: number;
        high: number;
        low: number;
        close: number;
        date: string; // Or Date, depending on how it's used internally
    }

    interface ChartConfig {
        w: number;
        h: number;
        // Add other config properties as needed
    }

    function drawChartForCandles(candles: Candle[], config?: ChartConfig): any; // Return type might be more specific
    function saveChartForCandles(candles: Candle[], filename: string, config?: ChartConfig): Promise<void>;
}
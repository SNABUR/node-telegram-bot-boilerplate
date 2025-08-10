import { ChartTypeRegistry } from 'chart.js';

declare module 'chart.js' {
  interface ChartTypeRegistry {
    candlestick: {
      chart: Chart.Chart;
      datasetPartial: Chart.ChartDataset<'candlestick'>;
      element: Chart.Element<any, any>;
      options: Chart.ChartOptions<'candlestick'>;
    };
  }
}
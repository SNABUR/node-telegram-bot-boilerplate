import { Chart, registerables } from "chart.js";
import { createCanvas } from "canvas";
import { OhlcData } from "../../dist/generated/supabase";

Chart.register(...registerables);

export const generateOhlcChart = async (ohlcData: OhlcData[]): Promise<Buffer> => {
	const labels: string[] = [];
	const closePrices: number[] = [];

	ohlcData.forEach((data) => {
		const hours = data.timestamp.getUTCHours().toString().padStart(2, "0");
		const minutes = data.timestamp.getUTCMinutes().toString().padStart(2, "0");
		labels.push(`${hours}:${minutes}`);
		closePrices.push(data.close.toNumber());
	});

	const volumeData: { x: number; y: number; color: string }[] = ohlcData.map((d) => ({
		x: d.timestamp.valueOf(),
		y: d.volume.toNumber(),
		color: d.close.greaterThanOrEqualTo(d.open) ? "rgba(25, 135, 84, 0.3)" : "rgba(220, 53, 69, 0.3)", // Opacidad reducida a 0.3
	}));

	const canvas = createCanvas(800, 600);
	const ctx = canvas.getContext("2d");

	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	new Chart(ctx as any, {
		type: "line",
		data: {
			labels: labels,
			datasets: [
				{
					label: "Close Price",
					data: closePrices,
					borderColor: "rgb(0, 123, 255)",
					tension: 0.1,
				},
				{
					type: "bar",
					label: "Volume",
					data: volumeData as any,
					yAxisID: "y2",
					backgroundColor: volumeData.map((d) => d.color),
				},
			],
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			scales: {
				x: {
					title: {
						display: true,
						text: "Time UTC",
						color: "black",
					},
					ticks: {
						color: "black",
					},
					grid: {
						color: "rgba(0, 0, 0, 0.1)",
					},
				},
				y: {
					title: {
						display: true,
						text: "Price",
						color: "black",
					},
					ticks: {
						color: "black",
					},
					grid: {
						color: "rgba(0, 0, 0, 0.1)",
					},
				},
				y2: {
					type: "linear",
					position: "right",
					grid: {
						drawOnChartArea: false,
					},
					ticks: {
						color: "black",
					},
					title: {
						display: true,
						text: "Volume",
						color: "black",
					},
				},
			},
			plugins: {
				legend: {
					labels: {
						color: "black",
					},
				},
			},
		},
	});

	return canvas.toBuffer("image/png");
};

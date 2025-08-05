import { Chart, registerables } from "chart.js";
import { createCanvas } from "canvas";
import { OhlcData } from "@app/generated/prisma";

Chart.register(...registerables);

export const generateOhlcChart = async (ohlcData: OhlcData[]): Promise<Buffer> => {
    const labels: string[] = [];
    const closePrices: number[] = [];

    ohlcData.forEach(data => {
        labels.push(data.timestamp.toLocaleTimeString());
        closePrices.push(data.close.toNumber());
    });

    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext("2d");

    new Chart(ctx as any, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Close Price",
                    data: closePrices,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
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
                        text: "Time",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Price",
                    },
                },
            },
        },
    });

    return canvas.toBuffer("image/png");
};

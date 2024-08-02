import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FormattedData } from "../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    tooltip: {
      backgroundColor: "white",
      titleColor: "black",
      bodyColor: "black",
      borderColor: "black",
      borderWidth: 1,
      titleFont: {
        size: 16,
        weight: "bold",
      },
      bodyFont: {
        size: 14,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
        size: 16,
        weight: "bold",
      },
    },
    y: {
      title: {
        display: true,
        text: "Cases",
      },
    },
  },
};

export type MyComponentProps = {
  data: FormattedData[];
  isGraphDataLoading: boolean;
};

const LineGraph = ({ data, isGraphDataLoading }: MyComponentProps) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Covid-19 Cases",
        data: data.map((d) => d.cases),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  return (
    <div className="mt-8">
      {isGraphDataLoading? (
        <div className="flex flex-col p-4 rounded-lg ">
          <div className="w-[1100px] max-[450px]:w-[280px] h-6 bg-gray-300 mb-4 rounded-md animate-pulse" />
          <div className="w-[1100px] max-[450px]:w-[280px] h-32 bg-gray-300 mb-4 rounded-md animate-pulse" />
          <div className="w-[1100px] max-[450px]:w-[280px] h-6 bg-gray-300 rounded-md animate-pulse" />
        </div>
      ) : (
        <Line
          data={chartData}
          options={options}
          className="max-[450px]:h-[326px] max-[450px]:w-[329px] w-[1100px] h-[450px]"
        />
      )}
    </div>
  );
};

export default LineGraph;

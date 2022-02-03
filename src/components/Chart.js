import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartContent } from "../utils/common";

function Chart({ data }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const chartData = chartContent({ data });
  return (
    <div className="chat__cont">
      <div className="chart__content">
        <h3>Portfolio</h3>
      </div>
      <div className="ch">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
}

export default Chart;

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function Chart({ data }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  let obj = {};
  console.log("Chart data", { data });
  if (data) {
    for (const elem of data) {
      if (!obj[elem.type]) {
        obj[elem.type] = 0;
      }
      obj[elem.type] = obj[elem.type] + elem.percentageOfPortfolioVal;
    }
  }
  const labels = [];
  const dataa = [];

  for (const [key, value] of Object.entries(obj)) {
    labels.push(key);
    dataa.push(value);
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Portfolio",
        data: dataa,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

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

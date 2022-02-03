export const chartContent = ({ data }) => {
  let obj = {};
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

  return chartData;
};

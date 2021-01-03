import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function Chart({ dataset = {}, ...rest }) {
  const generateData = () => {
    return {
      labels: dataset.data.map((d) => d.createdAt),
      datasets: [
        {
          label: dataset.label,
          data: dataset.data.map((d) => d.time),
          fill: dataset.fill || false,
          backgroundColor: dataset.backgroundColor || "#fff",
          borderColor: dataset.borderColor || "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
  };
  return <Line {...rest} data={generateData()} options={options} />;
}

Chart.propTypes = {
  data: PropTypes.object,
};

export default Chart;

import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = ({ stats }) => {
  const chartData = {
    labels: ['videos', 'projects', 'quizzes'],
    datasets: [
      {
        data: [stats.videos, stats.projects, stats.quizzes], // Example data
        backgroundColor: [
          "#ff9d42",
          "#19a28d",
          "#ffc610",
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "left",
        labels: {
          usePointStyle: true,
          pointStyle: "circle"
        }
      },
      datalabels: {
        display: true,
        color: "var(--color4)",
        align: "center",
        padding: {
          right: 2
        },
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 18
            }
          },
        },
      },
    }
  };

  return (
    <div className="">
      <h3 className="title center-text">Course Stats</h3>
      <div className="Fullflexbox">
        <div className="flex1 Fullflexbox flexdirectionrow ">
          <div className="bg-color1 flexbox ">
            <p className="center-text description app-content">Enrolled Students: {stats.enrolled}</p>

          </div>
          <div className=" flexbox">
            <p className="center-text description app-content">Completion Rate: {stats.completionRate}</p>

          </div>
        </div>
        <div className="bg-color4 flex1 app-content">
          <Doughnut data={chartData} options={options} />
        </div>

      </div>
    </div>
  );
};

export default Stats;

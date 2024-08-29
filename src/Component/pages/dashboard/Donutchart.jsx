import React, { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

function Donutchart() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Register the necessary components
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    const chartInstance = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: ["JavaScript", "Python", "Ruby"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(202, 138, 4)",
              "rgb(164, 101, 241)",
              "rgb(101, 143, 241)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // Allows custom size
      },
    });

    // Cleanup to remove the chart on component unmount
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div
      className="border bg-gray-50  border-gray-300 rounded-lg shadow-lg p-4"
      style={{ width: "300px", height: "300px" }}
    >
      
      <canvas
        ref={chartRef}
        id="chartDoughnut"
        style={{ width: "100%", height: "100%" }}
         // Responsive canvas sizing
         
      ></canvas>
      
    </div>
  );
}

export default Donutchart;

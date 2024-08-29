import React, { useState } from "react";
import "./chart.css";

function Cart() {
  const [chartData] = useState([112, 10, 225, 134, 101, 80, 50, 100, 200]);
  const [labels] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ]);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const showTooltip = (event, data) => {
    setTooltipContent(data);
    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY - 20,
    });
    setTooltipOpen(true);
  };

  const hideTooltip = () => {
    setTooltipOpen(false);
    setTooltipContent("");
  };

  return (
    <div className="antialiased sans-serif">
      <div className="">
        <div className="  mx-auto py-10">
          <div className="shadow p-6 rounded-lg bg-white">
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h2 className="text-xl text-gray-800 font-bold leading-tight">
                  Product Sales
                </h2>
                <p className="mb-2 text-gray-600 text-sm">Monthly Average</p>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 mr-2 rounded-full"></div>
                  <div className="text-sm text-gray-700">Sales</div>
                </div>
              </div>
            </div>

            <div className="line my-8 relative">
              {tooltipOpen && (
                <div
                  className="p-0 m-0 z-10 shadow-lg rounded-lg absolute h-auto"
                  style={{
                    bottom: `${tooltipPosition.y}px`,
                    left: `${tooltipPosition.x}px`,
                  }}
                >
                  <div className="shadow-xs rounded-lg bg-white p-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Sales:</div>
                      <div className="font-bold ml-2">{tooltipContent}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex -mx-2 items-end mb-2">
                {chartData.map((data, index) => (
                  <div className="px-2 w-1/6" key={index}>
                    <div
                      style={{ height: `${data}px` }}
                      className="transition ease-in duration-200 bg-yellow-600 hover:bg-yellow-400 relative"
                      onMouseEnter={(e) => showTooltip(e, data)}
                      onMouseLeave={hideTooltip}
                    >
                      <div className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm">
                        {data}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="border-t border-gray-400 mx-auto"
                style={{
                  height: "1px",
                  width: `${100 - (1 / chartData.length) * 100 + 3}%`,
                }}
              ></div>
              <div className="flex -mx-2 items-end">
                {labels.map((label, index) => (
                  <div className="px-2 w-1/6" key={index}>
                    <div className="relative">
                      <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

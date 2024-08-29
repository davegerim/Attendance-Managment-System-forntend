import React from "react";
import { DiJavascript1 } from "react-icons/di";



function Card2() {
  return (
    <div className="w-full">
      <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 pt-2">
        <div className="h-full">
          <div className=" mx-auto py-2 bg-white shadow-lg rounded-lg">
            <div className="px-6 ">
              <div className="flex items-start">
                <DiJavascript1
                  className="fill-current bg-gray-200 rounded-full mt-3 p-1 flex-shrink-0 mr-5"
                  style={{ width: "30px", height: "30px" }}
                />

                <div className="flex flex-grow justify-between items-center">
                  <div>
                    <h2 className="text-xl leading-snug font-bold text-black truncate mb-1">
                      Javascript
                    </h2>
                    <p className="text-black mb-2">7 lessons</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Text for progress */}
                    <span className="text-sm text-black ml-4">50% </span>

                    {/* Progress Bar */}
                    <div className="relative h-2 w-48 rounded-full overflow-hidden bg-gray-300">
                      <div
                        className="absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                        style={{ width: "50%" }}
                      ></div>
                    </div>

                    {/* Continue Button */}
                    <button
                      className="px-4 py-2 text-black font-semibold border border-black rounded-3xl"
                      onClick={() => {
                        // Add your continue logic here
                        console.log("Continue button clicked");
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card2;

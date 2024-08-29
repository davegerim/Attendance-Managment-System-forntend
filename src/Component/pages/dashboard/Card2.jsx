import React from "react";
import { AiOutlineGateway } from "react-icons/ai";
import Card3 from "./Card3";

function Card2() {
  return (
    <div className="w-full">
      <div className="font-bold pb-2 ">My Courses  <span className="bg-yellow-400 p-1 mr-2 rounded-full">2</span> </div>
      <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600  ">
        <div className="h-full">
          <div className=" mx-auto py-2 bg-white shadow-lg rounded-lg">
            <div className="px-6 ">
              <div className="flex items-start">
                <AiOutlineGateway
                  className="fill-current flex-shrink-0 bg-gray-200 rounded-full p-1.5  mt-3 mr-5"
                  style={{ width: "30px", height: "30px" }}
                  //   width="150"
                  //   height="150"
                />

                <div className="flex flex-grow justify-between items-center">
                  <div>
                    <h2 className="text-xl leading-snug font-bold text-black truncate mb-1">
                      Web Design
                    </h2>
                    <p className="text-black mb-2">10 lessons</p>
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
      <Card3 />
    </div>
  );
}

export default Card2;

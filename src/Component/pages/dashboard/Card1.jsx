import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdShowChart } from "react-icons/md";
import { SiMicrostrategy } from "react-icons/si";

function Card1() {
  return (
    <div>
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
            <div
              style={{ backgroundColor: "rgb(164, 101, 241)" }}
              class="p-3 rounded-full  bg-opacity-75"
            >
              <SiMicrostrategy class="h-8 w-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-sm font-semibold text-gray-700">
                Average Rating
              </h4>
              <div class="text-gray-500">8/10</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
            <div
              style={{ backgroundColor: "rgb(101, 143, 241)" }}
              class="p-3 rounded-full  bg-opacity-75"
            >
              <MdShowChart class="h-8 w-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-sm font-semibold text-gray-700">Active Tasks</h4>
              <div class="text-gray-500">12 tasks</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-black">
            <div class="mx-5">
              <h4 class="text-sm font-semibold text-white">
                You have new message!
              </h4>
              {/* <div class="text-white">Available Products</div> */}
            </div>
            <div class="p-3 rounded-full  bg-opacity-75">
              <FaArrowRightLong class="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;

import React from "react";
import { SlCalender } from "react-icons/sl";

function Calender() {
  const name = [
    {
      id: 1,
      time: "12:00 am",
      title: "Meeting",
      description: "New Learning formats",
    },
    {
      id: 2,
      time: "10:00 am",
      title: "Meeting",
      description: "New Learning formats",
    },
  ];

  return (
    <div class="">
      <div class="flex justify-between">
        <div class="font-bold text-xl">Calander</div>
        <div class="mt-1">
          <SlCalender />
        </div>
      </div>{" "}
      <div class="  mt-6">May 29,2023</div>
      <div class=" border border-gray-200 mb-2"></div>
      {name &&
        name.map((data) => (
          <div class=" border-b border-gray-200 ">
            <div
              className="flex flex-col md:flex-row space-x-2 space-y-2 
              "
              key={data.id}
            >
              <p className="text-gray-700 mt-5">{data.time}</p>
              <div className="border-l-2 border-gray-500 pl-4">
                <h3 className="text-xl font-bold ">{data.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      <div className="pt-3">
        <button
          className="  w-full  px-14  py-1 text-black font-bold text-sm border border-black rounded-xl"
          onClick={() => {
            // Add your continue logic here
            console.log("Continue button clicked");
          }}
        >
          All Events
        </button>
      </div>
    </div>
  );
}

export default Calender;

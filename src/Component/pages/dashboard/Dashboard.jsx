import React from "react";
import Card1 from "./Card1";
import Cart from "./Cart";
import Donutchart from "./Donutchart";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Calender from "./Calender";

function Dashboard() {
  return (
    <div className="">
     
      <div className="flex py-4 space-x-2">
        <div className="w-3/4">
          <Card1 />
          <div className="flex  space-x-2">
            <div Class="w-full">

            <Cart />
            </div>
            <div className="pt-10">

            <Donutchart />
            </div>
            
          </div>
          <div className=" ">
            <Card2 />
            
          </div>
        </div>
        <div className="1/4">
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

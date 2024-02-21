"use client"
import AnglePieChart from "../ui/dashboard/AnglePieChart/AnglePieChart";
import Card from "../ui/dashboard/Card/Cards";
import Linechart from "../ui/dashboard/LineChart/LineChart";

const dashboard = () => {
  return (
    <div className="mt-3">
      <div className="w-full mt-3">
        <Card />
      </div>
      <div className="flex">
        <div className="w-full pr-2">
          <Linechart />
        </div>
        {/* <div className="w-2/3 pl-2">
          <AnglePieChart />
        </div> */}
      </div>
    </div>
  );
}

export default dashboard;
  
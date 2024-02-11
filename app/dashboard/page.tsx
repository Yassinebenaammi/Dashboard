import Card from "../ui/dashboard/Card/Cards";
import Charts from "../ui/dashboard/Chart/Charts";
import RightBar from "../ui/dashboard/Rightbar/RightBar";
import Transactions from "../ui/dashboard/Transactions/Transactions";

const dashboard = () => {
  return (
    <div className=" mt-3">
        <div className="flex justify-between">
          <Card/>
        </div>
    </div>
      
  );
}

export default dashboard;

import DashboardCard from "./DashboardCard/DashboardCard";
import "./DashboardCard/DashboardCard.css";
import ModalCard from "./ModalCard/ModalCard";
import ModalStatistics from "./ModalStatistics/ModalStatistics";
import Order from "./Order /Order";
export const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="row-span-2 col-span-2 ps-5 pt-[13px] ms-1 pe-6 leading-[140%] ">
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-b-slate-600 w-full">
            <div>
              <h1 className="text-[28px] font-semibold mb-2">Dashboard</h1>
              <time className="">Tuesday 2 Feb, 2021</time>
            </div>
          </div>
          <ul className="flex mb-6">
            <DashboardCard />
          </ul>
          <Order/>
        </div>
        <div className="">
        <div className="modal-card mb-5">
          <div className="modal-header border-b-slate-600 pb-5">
            <h3>Most Ordered</h3>
            <select className="modal-header__select ml-3.5" name="" id="">
              <option className="" value="">
                today
              </option>
            </select>
          </div>
          <ul className="flex flex-col gap-y-6 mt-5 mb-8">
            <ModalCard />
          </ul>
          <button className="modal-btn">View All</button>
        </div>
            <ModalStatistics/>
        </div>
       
      </div>
    </>
  );
};

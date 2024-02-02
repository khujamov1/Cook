import React from "react";
import "./DashboardCard.css";
const DashboardCard = () => {
  return (
    <>
      <li className="dashboard-item">
        <div className="">
          <span className="dashboard-span">+32.40%</span>
          <p className="dashboard-number">$10,243.00</p>
          <p className="dashboard-text">Total Revenue</p>
        </div>
      </li>
      <li className="dashboard-item">
        <div className="">
          <span className="dashboard-span-two">-12.40%</span>
          <p className="dashboard-number">23,456</p>
          <p className="dashboard-text">Total Dish Ordered</p>
        </div>
      </li>
      <li className="dashboard-item-last">
        <div className="">
          <span className="dashboard-span-three">+2.40%</span>
          <p className="dashboard-number">1,234</p>
          <p className="dashboard-text">Total Customer</p>
        </div>
      </li>
    </>
  );
};

export default DashboardCard;

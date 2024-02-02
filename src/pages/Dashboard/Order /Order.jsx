import React from "react";
import "./Order.css";
import UserInfo from "./UserInfo/UserInfo";
const Order = () => {
  return (
    <div className="order">
      <div className="order-header">
        <div className="order-page flex items-center justify-between mb-4">
          <h2 className="order-header__title">Order Report</h2>
          <button className="order-header__btn">Filter Order</button>
        </div>
        <div className="order__link-box">
          <a className="order__link" href="#">
            Customer
          </a>
          <a className="order__link" href="#">
            Menu
          </a>
          <a className="order__link-second" href="#">
            Total Payment
          </a>
          <a className="order__link-last" href="#">
            Status
          </a>
        </div>
      </div>
      <ul className="">
        <UserInfo />
      </ul>
    </div>
  );
};

export default Order;

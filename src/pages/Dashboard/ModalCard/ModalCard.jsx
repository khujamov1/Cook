import React from "react";
import "./ModalCard.css";
const ModalCard = () => {
  return (
    <>
      <li className="modal-item flex">
        <img className="me-3" src={"./public/images/lagmon.svg"} alt="" />
        <div>
          <h4 className="modal-title">Spicy seasoned seafood noodles</h4>
          <p className="modal-text ">200 dishes ordered</p>
        </div>
      </li>
      <li className="modal-item flex">
        <img className="me-3" src={"./public/images/lagmon.svg"} alt="" />
        <div>
          <h4 className="modal-title">Spicy seasoned seafood noodles</h4>
          <p className="modal-text ">200 dishes ordered</p>
        </div>
      </li>
      <li className="modal-item flex">
        <img className="me-3" src={"./public/images/lagmon.svg"} alt="" />
        <div>
          <h4 className="modal-title">Spicy seasoned seafood noodles</h4>
          <p className="modal-text ">200 dishes ordered</p>
        </div>
      </li>
    </>
  );
};

export default ModalCard;

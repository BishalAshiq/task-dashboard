import React from "react";
import "./TransactionsSummaty.css";
import b1 from "../../../Images/b1.png";
import b2 from "../../../Images/b2.png";

const TransactionsSummaty = () => {
  return (
    <div className="trans-div">
      <h4 style={{fontWeight: 700}}>Transaction Summary</h4>
      <div className="Transaction-Summ">
      <div className="items-trans">
        <img style={{ width: 150 }} src={b1} alt="" />
        <div>
          <h3 style={{fontWeight: "bold"}}>585</h3>
          <p>Succesfull Order</p>
        </div>
      </div>
      <div className="items-trans">
        <img style={{ width: 150 }} src={b2} alt="" />
        <div>
          <h3 style={{fontWeight: "bold"}}>165</h3>
          <p>Unsuccesfull Order</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TransactionsSummaty;

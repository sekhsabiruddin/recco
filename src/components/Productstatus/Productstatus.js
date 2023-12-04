import React from "react";
import "./Productstatus.css";
const Productstatus = () => {
  return (
    <div className="product-status-outer">
      <div className="inner-box">
        <div>
          <span>Supplier</span>
          <h3>East coast fruit & vegetables</h3>
        </div>
        <div>
          <span>Shoping date</span>
          <h3>Thu,Feb 10</h3>
        </div>
        <div>
          <span>Total</span>
          <h3>$ 15,028.3</h3>
        </div>
        <div>
          <span>Deperament</span>
          <h3>300-444-678</h3>
        </div>
        <div>
          <span>status</span>
          <h3>Awaiting you approval</h3>
        </div>
      </div>
    </div>
  );
};

export default Productstatus;

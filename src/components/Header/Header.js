import React from "react";
import "./Header.css";
import { PiShoppingCartThin } from "react-icons/pi";
const Header = () => {
  return (
    <div className="outer-header">
      <header>
        <div className="header-above-part">
          <div className="above-left">
            <a className="logo">Recco</a>
            <a href="">Store</a>
            <a href="">Orders</a>
            <a href="">Analytics</a>
          </div>
          <div className="above-right">
            <PiShoppingCartThin />
            <span>Hello,jsames </span>
          </div>
        </div>
        <div className="header-middle-part">
          <p>Orders &gt; Order 32457ABC</p>
        </div>
        <div className="header-below-part">
          <div className="below-left">
            <h2>Order 32457ABC</h2>
          </div>
          <div className="below-right">
            <button className="back-btn">Back</button>
            <button className="approve-btn">Approve order</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import "./ShoecareCheckout.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";

function ShoecareCheckout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="shoecare-checkout-outer">
        <div className="shoecare-checkout-outer-four-images-container">
          <div className="shoecare-checkout-image-one shoecare-checkout-shoe"></div>
          <div className="shoecare-checkout-image-two shoecare-checkout-shoe"></div>
          <div className="shoecare-checkout-image-three shoecare-checkout-shoe"></div>
          <div className="shoecare-checkout-image-four shoecare-checkout-shoe"></div>
        </div>
        <div className="shoecare-checkout-outer-input">
          <div className="shoecare-checkout-item-info">
            <p className="shoecare-checkout-name">
              Deluxe Cleaning Kit (5 pieces)
            </p>
            <p className="shoecare-checkout-price">$ 33.25</p>
            <p className="shoecare-checkout-paragraph">
              The Deluxe Kit includes all of Sneaker LAB's shoe and sneaker care
              essentials, packaged in a limited edition box. It features a
              sneaker cleaner, snea...
            </p>
          </div>
          <button className="shoecare-checkout-button">Add to bag</button>
        </div>
      </div>
    </>
  );
}

export default ShoecareCheckout;

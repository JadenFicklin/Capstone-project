import "./Checkout.css";
import React, { useState } from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getShoe() {
    axios.get(`http://localhost:4000/api/houses/${id}`).then(function (res) {
      setShoe(res.data);
    });
  }

  useEffect(() => {
    getShoe();
  }, []);

  const { id } = useParams();
  const [shoe, setShoe] = useState({});

  return (
    <>
      <Nav />
      <div className="checkout-outer">
        <div className="checkout-outer-four-images-container">
          <div
            className="checkout-image-one checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageOne})` }}
          ></div>
          <div
            className="checkout-image-two checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageTwo})` }}
          ></div>
          <div
            className="checkout-image-three checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageThree})` }}
          ></div>
          <div
            className="checkout-image-four checkout-shoe"
            style={{ backgroundImage: `url(${shoe.imageFour})` }}
          ></div>
        </div>
        <div className="checkout-outer-input">
          <div className="checkout-item-info">
            <p className="checkout-type">{shoe.type}</p>
            <p className="checkout-name">{shoe.name}</p>
            <p className="checkout-price">${shoe.price}</p>
            <p className="checkout-paragraph">
              Everything we do is meant to last. Our designs last. Our products
              last. This collection of wardrobe essentials comes in six timeless
              colorways that fit any season...
            </p>
          </div>
          <button className="checkout-button">Add to bag</button>
        </div>
      </div>
    </>
  );
}

export default Checkout;

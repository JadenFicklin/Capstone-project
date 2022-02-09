import "./Shop.css";
import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useScrollPosition from "../hooks/useScrollPosition";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [shoes, setShoes] = useState([]);
  const [allShoes, setAllShoes] = useState([]);

  function getButton() {
    axios.get(`http://localhost:4000/api/houses`).then(function (res) {
      setShoes(res.data);
      setAllShoes(res.data);
    });
  }

  useEffect(() => {
    getButton();
  }, []);

  function filterShoes(filter) {
    const filteredArray = shoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(filter)
    );
    setShoes(filter === "" ? allShoes : filteredArray);
  }
  return (
    <>
      <Nav light={true} />

      <div className="shop-span-image">
        <div className="shop-shoes">Shoes Selection</div>
      </div>
      <div className="shop-search-bar">
        <p className="shop-search-text">Search</p>
        <input
          className="shop-search-input"
          onChange={(e) => filterShoes(e.target.value)}
        ></input>
      </div>
      <div className="shop-outer">
        {shoes.map((shoe) => (
          <Link to={`/Checkout/${shoe.id}`} key={shoe.id}>
            <div
              className="box"
              style={{ backgroundImage: `url(${shoe.imageOne})` }}
            >
              <span>{shoe.name}</span>
              <span>${shoe.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Shop;

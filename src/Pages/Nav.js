import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

function Nav({ light }) {
  const scrollPosition = useScrollPosition();
  const isScrolling = scrollPosition > 0;

  const staticStyling = { color: light ? "white" : "#404040" };
  const scrollStyling = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  };

  const navStyling = isScrolling ? scrollStyling : staticStyling;

  return (
    <div className="nav" style={navStyling}>
      <div className="nav-first">
        {/* euka */}
        <Link to="/">
          <button className="euka">Euka.</button>
        </Link>
        {/* Shop */}
        <Link to="/Shop">
          <button className="shop">Shop</button>
        </Link>
        {/* Shoecare */}
        <Link to="/Shoecare">
          <button className="shoecare">Shoecare</button>
        </Link>
        <Link to="/About">
          <button className="about-link">About</button>
        </Link>
      </div>
      <div className="nav-last">
        {/* Signup */}
        <Link to="/Signup">
          <button className="sign-up">sign up</button>
        </Link>
        {/* Login */}
        <Link to="/Login">
          <button className="login">login</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;

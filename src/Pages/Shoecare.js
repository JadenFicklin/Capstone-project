import "./Shoecare.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";

function Shoecare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollPosition = useScrollPosition();
  const imageChangeStyling = { marginTop: "200px", opacity: "0%" };
  const imageStaticStyling = { marginTop: "0px", opacity: "100%" };
  const spanChangeStyling = { marginTop: "0px", opacity: "100%" };
  const spanStaticStyling = { height: "900px", opacity: "0%" };

  const spanStyling =
    scrollPosition < 500 ? spanChangeStyling : spanStaticStyling;

  const imageStyling =
    scrollPosition < 700 ? imageChangeStyling : imageStaticStyling;

  const imageTwoStyling =
    scrollPosition < 1100 ? imageChangeStyling : imageStaticStyling;
  return (
    <>
      <Nav />
      <div className="shoecare-outer">
        <Link to="/ShoecareCheckout">
          <div className="shoecare-span-image" style={spanStyling}>
            <div className="shoecare-image-span-text">Shoecare Solutions</div>
          </div>
        </Link>
        <div className="shoecare-text-outer">
          <div className="shoecare-text-one">
            <p className="shoecare-text-header">
              At Euka, everything we do is meant to last.
            </p>
            <p className="shoecare-text-one-paragraph">
              Our products last, our designs last, our relationships last. That
              consistency is the one thing that we’re most proud of. We stand
              behind everything we make. But note that our products require care
              if they are going to be used the way they are intended. Our items
              will last even longer if you take good care of them.
            </p>
          </div>
          <div className="shoecare-text-two">
            <p>
              That’s why we have developed a complete shoe care range with
              SneakerLAB®, a premium supplier of eco friendly and effective
              cleaning formulas. Hence its harmless ingredients, their product
              is fully biodegradable and does not damage the natural features of
              leather, rubber and textile.
            </p>
          </div>
        </div>
        <div className="shoecare-bottom-outer">
          <Link to="/ShoecareCheckout">
            <div
              className="shoecare-bottom-left-picture"
              style={imageStyling}
            ></div>
          </Link>
          <div className="shoecare-bottom-right-container-outer">
            <div className="shoecare-bottom-right-containers-text">
              <Link to="/ShoecareCheckout">
                <div className="shoecare-text-bottom">
                  <p calssName="shoecare-text-bottom-header">
                    Harmless yet effective
                  </p>
                  <p className="shoecare-text-bottom-paragraph">
                    Explore our natural shoe care solutions with SneakerLAB®
                  </p>
                </div>
              </Link>
            </div>
            <Link to="/ShoecareCheckout">
              <div
                className="shoecare-bottom-right-containers-bottom-left-picture"
                style={imageTwoStyling}
              ></div>
            </Link>
            <Link to="/ShoecareCheckout">
              <div
                className="shoecare-bottom-right-containers-bottom-right-picture"
                style={imageTwoStyling}
              ></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shoecare;

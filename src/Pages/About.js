import "./About.css";
import React from "react";
import Nav from "./Nav";
import { useEffect } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

function About() {
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
    scrollPosition < 500 ? imageChangeStyling : imageStaticStyling;

  const imageTwoStyling =
    scrollPosition < 1700 ? imageChangeStyling : imageStaticStyling;

  const imageThreeStyling =
    scrollPosition < 1900 ? imageChangeStyling : imageStaticStyling;

  const imageFourStyling =
    scrollPosition < 3300 ? imageChangeStyling : imageStaticStyling;

  const imageFiveStyling =
    scrollPosition < 4900 ? imageChangeStyling : imageStaticStyling;

  const imageSixStyling =
    scrollPosition < 4700 ? imageChangeStyling : imageStaticStyling;

  const imageSevenStyling =
    scrollPosition < 6100 ? imageChangeStyling : imageStaticStyling;
  return (
    <>
      <Nav light={true} />
      <div className="about-outer">
        <div className="about-span-image" style={spanStyling}>
          <div className="about-image-span-text">Our Journey explained</div>
        </div>
        <div className="about-text-one-outer">
          <div className="about-text-one">
            <h4 className="about-span-one">A constant journey to perfection</h4>
            <br></br>
            <br></br>All our shoes are designed in Iceland and handmade by
            experienced craftsman. Through this combination we have merged
            traditional craftsmanship with innovative design, applying artisanal
            techniques to sneakers silhouettes based on classic tennis sneakers.
            That’s what makes our product unique.
          </div>
        </div>
        <div className="about-pictures-one-and-two-outer">
          <div className="about-picture-one" style={imageStyling}></div>
          <div className="about-picture-two" style={imageStyling}></div>
        </div>
        <div className="about-pictures-three-and-four-outer">
          <div className="about-picture-three" style={imageThreeStyling}>
            <div className="about-inner-picture-three"></div>
          </div>
          <div className="about-picture-four" style={imageTwoStyling}></div>
        </div>
        <div className="about-text-two-outer">
          <div className="about-text-two">
            <span className="fashion">It’s not fashion. It’s design.</span>
            <br></br>
            <br></br>The difference between the two, for us, is about change
            versus improvement. Being just different is very simple. Being
            better is difficult, but far more valuable. It’s a constant journey
            to perfection, always questioning our previous wins, always aiming
            to do it better next time. We focus on comfort, durability and
            sustainability; the main pillars in our search for the ultimate
            everyday-sneakers.
          </div>
        </div>
        <div className="about-picture-five" style={imageFourStyling}></div>
        <div className="about-pictures-six-and-seven-outer">
          <div className="about-picture-six" style={imageFiveStyling}>
            <div className="about-picture-six-inner"></div>
          </div>
          <div className="about-picture-seven" style={imageSixStyling}></div>
        </div>

        <div className="locations-picture" style={imageSevenStyling}>
          <div className="locations-text">Locations</div>
        </div>
        <div className="locations-lower-text-outer">
          <div className="locations-lower-text-inner">
            Address:<br></br>
            <br></br>
            Fusio Ltd <br></br>
            26 Great Strand Street<br></br>
            Dublin<br></br>
            D01 R3P6<br></br>
            Ireland<br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

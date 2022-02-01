import "./Home.css";
import React from "react";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <Nav />
      <div class="outer">
        {/* span image */}
        <div class="span-image">
          <div class="image-span-text">
            <span class="you-shop">Footware, made for you</span>
            <span class="eureka">
              <span class="eu">Eu</span>
              <span class="r">r</span>
              <span class="e">e</span>
              <span class="k">k</span>
              <span class="a">a</span>
            </span>
            <button class="span-button">SHOP NOW</button>
          </div>
        </div>

        {/* <!-- shop women, shop men, about us --> */}
        <div id="outer-shop">
          <div class="shop-women-image"></div>
          <div class="shop-women-text">
            Shop for Women
            <a href="" class="shop-women-button">
              Shop now
            </a>
          </div>
          <div class="shop-men-image"></div>
          <div class="shop-men-text">
            Shop for Men
            <a href="" class="shop-men-button">
              Shop now
            </a>
          </div>
          <div class="who-we-are-image"></div>
          <div class="who-we-are-text">
            Who we are <br />
            Our journey explained.
            <a href="" class="who-we-are-button">
              Read story
            </a>
          </div>
        </div>

        {/* <!-- our best sellers --> */}
        <div class="our-best-sellers">Our best sellers</div>
        <div class="outer-best-sellers">
          <div class="first-option-image"></div>
          <div class="second-option-image"></div>
          <div class="third-option-image"></div>
          <div id="first-option-text">
            Metal-free tanned leather <br />
            LT 01 VEGEA White <br />
            $229
          </div>
          <div class="second-option-text">
            Metal-free tanned leather <br />
            LT 01 All Black <br />
            $249
          </div>
          <div class="third-option-text">
            Metal-free tanned leather <br />
            LT 01 Court Lite White / Sand <br />
            $189
          </div>
        </div>

        {/* <!-- shoecare and locations --> */}
        <div class="outer-shoecare-locations">
          <div class="shoecare-image"></div>
          <div class="location-image"></div>
          <div class="shoecare-text">
            Shoecare solutions
            <div class="shoecare-btn">
              <a id="shoecare-button">Shop now</a>
            </div>
          </div>
          <div class="location-text">
            locations
            <div class="store-btn">
              <a class="find-store">Find store</a>
            </div>
          </div>
        </div>

        {/* <!-- bottom of page --> */}
        <div class="outer-bottom">
          <div class="customer-care-text">
            <div class="bottom-text-header">Customer Care</div>
            <div class="bottom-text">Shipping and returns</div>
            <div class="bottom-text">Contact us</div>
            <div class="bottom-text">FAQ's</div>
            <div class="bottom-text">Size guide</div>
            <div class="bottom-text">Retailers</div>
            <div class="bottom-text">WholeSale</div>
            <div class="bottom-text">AfterPay</div>
            <div class="bottom-text">Legal & privacy</div>
          </div>
          <div class="our-world-text">
            <div class="bottom-text-header">Our World</div>
            <div class="bottom-text">About us</div>
            <div class="bottom-text">Ethics & sustainability</div>
            <div class="bottom-text">Giving back</div>
          </div>
          <div class="follow-text">
            <div class="bottom-text-header">Follow</div>
            <div class="bottom-text">Instagram</div>
            <div class="bottom-text">Facebook</div>
            <div class="bottom-text">Newsletter</div>
          </div>
        </div>

        {/* <!-- end of .outer --> */}
      </div>
    </>
  );
}

export default Home;
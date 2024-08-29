import React from "react";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarsIcon from '@mui/icons-material/Stars';
import ScrollingBanner from "./ScrollingBanner";

export const Navigation = (props) => {
  return (
    <>
      <nav className="navbar-fixed-top">
    <ScrollingBanner/>
        <nav id="menu" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                id="custom-toggle" // Use id for the toggle button
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
              </button>
              <a className="navbar-brand page-scroll" href="/">
                Pioxno
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/" className="page-scroll">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/Brands" className="page-scroll">
                    Our Brands
                  </a>
                </li>
                <li>
                  <a href="/Merchandise" className="page-scroll">
                    Merchandise
                  </a>
                </li>
                <li>
                  <a href="/About" className="page-scroll">
                    About Pioxno
                  </a>
                </li>
                <li>
                  <a href="/Career" className="page-scroll">
                    Career
                  </a>
                </li>
                <li>
                  <a id="textD" href="/JoinNow" className="page-scroll">
                    <span id="JoinButton">Join Reward Program</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
};

import React from "react";
import { Features } from "./features.jsx";
import { Services } from "./services.jsx";
import RewardsStepsBanner from "./RewardsStepsBanner.jsx";
import ComingSoonPage from "./ComingSoonPage.jsx";
import MerchandiseBanner from "./MerchandiseBanner.jsx";



export const Header = (props) => {
  return (
    <>
   
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                Innovate. Create. Dominate.
             
                </h1>
             
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
Join Reward Program                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Features />
      <Services  />
      <RewardsStepsBanner/>
      <MerchandiseBanner/>
      <ComingSoonPage/>
    
    </>
  );
};

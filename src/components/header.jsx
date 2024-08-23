import React from "react";
import { Features } from "./features";
import { Team } from "./Team";
import { Services } from "./services";
import RewardsStepsBanner from "./RewardsStepsBanner";
import ComingSoonPage from "./ComingSoonPage";
import MerchandiseBanner from "./MerchandiseBanner";



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

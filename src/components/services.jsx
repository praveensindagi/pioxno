import React from "react";
import Levels from "./Levels";
import FoodCard from "./FoodCard";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarsIcon from '@mui/icons-material/Stars';
export const Services = (props) => {
  return (
    <>
  
  
    <div id="services" className="text-center">
     
      <div className="container">
        <div className="section-title">
          <h2>Join Early Access to Pioxno Rewards Program</h2>
          <p>
          At Pioxno, we believe in the timeless art of culinary craftsmanship, where every dish tells a story of tradition, flavor, and passion. With three distinct brand outlets under our banner, we invite you to embark on a journey of taste that celebrates the essence of Indian cuisine.
          </p>
        </div>
        <Levels/>
      </div>
    </div>
    </>
  );
};

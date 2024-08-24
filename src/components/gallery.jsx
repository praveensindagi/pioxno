import FoodCard from "./FoodCard";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Menu</h2>
          <p>
          Taste the Difference, Choose Pioxno.
          </p>
          <p>
      Top Selling 
       </p>
     
        </div>
       <FoodCard/>
       <p>
       Big Saver Combo's
       </p>
       
       <FoodCard/>
     

      </div>
    </div>
  );
};

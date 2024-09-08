import React, { useState, useEffect } from "react";
import { Features } from "./BrandsBanner.jsx";
import { Services } from "./services.jsx";
import RewardsStepsBanner from "./RewardsStepsBanner.jsx";
import ComingSoonPage from "./ComingSoonPage.jsx";
import MerchandiseBanner from "./MerchandiseBanner.jsx";
import {Box ,Button,Typography} from '@mui/material';
import Intro from "./Intro.jsx";
import { Helmet } from 'react-helmet';



export const Header = (props) => {
  const [loading, setLoading] = useState(true);


  return (
    <>
    <Helmet>
      <title>Pioxno: Top Multi-Brand Food Delivery Service | Italian, Indian & High-Protein Meals</title>
      <meta name="description" content="Discover Pioxno, your go-to for high-quality Italian, Indian, and high-protein meals delivered fast. Explore our diverse menu and enjoy exceptional service today!" />
      <meta name="keywords" content="Pioxno, food delivery, Italian food, Indian food, high-protein meals, fast delivery, food tech" />
    </Helmet>
    <div>

  
   <Intro/>
      <Services  />
      <RewardsStepsBanner/>
      <MerchandiseBanner/>
      <ComingSoonPage/>
            
            </div>
         
    </>
  );
};

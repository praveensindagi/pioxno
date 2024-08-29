import React from "react";
import { Features } from "./BrandsBanner.jsx";
import { Services } from "./services.jsx";
import RewardsStepsBanner from "./RewardsStepsBanner.jsx";
import ComingSoonPage from "./ComingSoonPage.jsx";
import MerchandiseBanner from "./MerchandiseBanner.jsx";
import {Box ,Button,Typography} from '@mui/material';
import Intro from "./Intro.jsx";



export const Header = (props) => {
  return (
    <>
 
    
   <Intro/>
      <Services  />
      <RewardsStepsBanner/>
      <MerchandiseBanner/>
      <ComingSoonPage/>
    
    </>
  );
};

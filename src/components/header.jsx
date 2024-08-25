import React from "react";
import { Features } from "./BrandsBanner.jsx";
import { Services } from "./services.jsx";
import RewardsStepsBanner from "./RewardsStepsBanner.jsx";
import ComingSoonPage from "./ComingSoonPage.jsx";
import MerchandiseBanner from "./MerchandiseBanner.jsx";
import {Box ,Button,Typography} from '@mui/material';



export const Header = (props) => {
  return (
    <>
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('../img/Home.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        padding:'15px',
      }}
    >
      <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
      Innovate. Create. Dominate.
      
      </Typography>
      
      
      
    </Box>
    
    <Features />
      <Services  />
      <RewardsStepsBanner/>
      <MerchandiseBanner/>
      <ComingSoonPage/>
    
    </>
  );
};

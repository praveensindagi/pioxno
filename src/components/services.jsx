import React from "react";
import Levels from "./Levels";
import {Box ,Container,Typography} from '@mui/material';

export const Services = (props) => {
  return (
    <>
  

    
   <Box
      sx={{
        height: 'Auto',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: '50px',
     
        backgroundColor: '#f0f0f0', // Optional background color
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
          fontWeight: 'bold',
          color: '#333', // Optional text color
          padding:'20px',
          paddingBottom:'0px',
        }}
      >
        Join Early Access to Pioxno Rewards Program
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '1rem', sm: '3rem', md: '1rem' }, // Responsive font size
          fontWeight: 'bold',
          color: '#333', // Optional text color
           padding:'20px'
        }}
      >
          At Pioxno, we believe in the timeless art of culinary craftsmanship, where every dish tells a story of tradition, flavor, and passion. With three distinct brand outlets under our banner, we invite you to embark on a journey of taste that celebrates the essence of Indian cuisine.
          </Typography>
          <Container>
          <Levels/>
           </Container>
   
    </Box>
    
    </>
  );
};

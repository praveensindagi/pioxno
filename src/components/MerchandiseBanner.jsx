import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const MerchandiseBanner = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#000',
        backgroundImage: `radial-gradient(black, rgba(255, 255, 255, 0) 50%), 
                          radial-gradient(purple, rgba(255, 255, 255, 0) 70%)`,
        backgroundSize: '50px 50px',
        backgroundPosition: '10 10,10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
      
      }}
    >
      <Typography  sx={{fontSize:'48px', fontWeight:'600', fontWeight: 'bold', mb: 2 ,padding:'10px'}}>
        Exclusive Collection Now Available!
      </Typography>
      <Typography  sx={{fontSize:'24px', fontWeight:'600',mb: 4 ,padding:'20px',}} >
        Discover our latest merchandise, curated just for you.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          height:"50px",
          width:'300px',
          fontSize:'16px',
          backgroundColor: "transparent",
          border:"1px solid white",
          ':hover': {
            backgroundColor: '#000000',
            color:'white'
          },
        }}
        href="/merchandise" // Update this link to your merchandise page
      >
        Explore Our Merchandise
      </Button>
    </Box>
  );
};

export default MerchandiseBanner;

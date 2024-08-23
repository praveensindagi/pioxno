import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const MerchandiseBanner = () => {
  return (
    <Box
      sx={{
        height: '500px',
        backgroundColor: '#000',
        backgroundImage: `radial-gradient(black, rgba(255, 255, 255, 0) 50%), 
                          radial-gradient(purple, rgba(255, 255, 255, 0) 50%)`,
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
      <Typography variant="h3" component="h12" sx={{ fontWeight: 'bold', mb: 2 }}>
        Exclusive Collection Now Available!
      </Typography>
      <Typography variant="h5" component="p" sx={{ mb: 4 }}>
        Discover our latest merchandise, curated just for you.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          backgroundColor: '#f50057',
          ':hover': {
            backgroundColor: '#c51162',
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

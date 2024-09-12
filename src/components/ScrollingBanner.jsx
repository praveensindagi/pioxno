// ScrollingBanner.js
import React from 'react';
import { Box, Typography, Icon } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ScrollingBanner = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        bgcolor: '#000',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          animation: 'scroll-left 12s linear infinite',
          color: '#fcfcfc',
          fontSize: '16px',
          px: 2,
        }}
      >
        <Typography component="span" sx={{ display: 'flex', alignItems: 'center',fontSize:'14px' ,fontWeight:'bold'}}>
          <StarsIcon fontSize="large" sx={{ mr: 1 }} />
          Unlock 100 Bonus Points Instantly! Join today and get early access to rewards!  
              <StarsIcon fontSize="large"  sx={{ ml: 1,}} />
        </Typography>
        
      </Box>
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default ScrollingBanner;

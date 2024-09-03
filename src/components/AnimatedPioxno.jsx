import React from 'react';
import { Typography, Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const popInOut = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 1;
  }
`;

const AnimatedPioxno = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#fff',
                animation: `${popInOut} 5s ease-in-out`,
            }}
        >
                 <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#333',
                    animation: `${popInOut} 1s ease-in-out`,
                    fontSize: '10vw', // Responsive font size
                    '@media (min-width:600px)': {
                        fontSize: '8vw', // Tablet size
                    },
                    '@media (min-width:960px)': {
                        fontSize: '5vw', // Desktop size
                    },
                }}
            >
                Pioxno
            </Typography>
        </Box>
    );
};

export default AnimatedPioxno;

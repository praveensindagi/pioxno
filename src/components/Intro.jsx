  import React from 'react';
  import { Box, Typography, Button } from '@mui/material';

  const Intro = () => {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Typography
        
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#000',
            fontWeight:'800',
            maxWidth: '800px',
            fontSize:'60px',
          }}
        >
          Deliciously Fast, Delivered Fresh to Your Door
        </Typography>
        <Button href='https://www.zomato.com/bangalore/taste-of-pioxno-hebbal-bangalore'
          variant="outlined"
          size="large"
          sx={{
            borderColor: '#000',
            color: '#000',
            width:'250px',
            height:'50',
            padding: '10px 30px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#000',
              color: '#fff',
              borderColor: '#000',
            },
          }}
          onClick={() => {
            // Handle button click here
            console.log('Order Now clicked');
          }}
        >
          Order Now
        </Button>
      </Box>
    );
  };

  export default Intro;

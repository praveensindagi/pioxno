import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const PaymentBanner = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, textAlign: 'center' }}>
     

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <PaymentIcon sx={{ fontSize: 25, color: '#333' }} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Multiple Payment Options
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Pay with credit/debit cards, UPI, net banking, and more.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <SecurityIcon sx={{ fontSize: 25, color: '#333' }} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            100% Secure Payments
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your payment information is safe and secure with us.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <LocalOfferIcon sx={{ fontSize: 25, color: '#333' }} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Exciting Offers
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Avail discounts and cashback on select payment methods.
          </Typography>
        </Grid>
      </Grid>

      
    </Box>
  );
};

export default PaymentBanner;

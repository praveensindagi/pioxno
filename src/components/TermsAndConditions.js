import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 20, mb: 30 }}>
      <Typography variant="h4" gutterBottom>
        Pioxno Rewards Program – Terms and Conditions
      </Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          1. Eligibility
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Pioxno Rewards Program ("Program") is currently in early access and is open to all customers who sign up through our website or mobile app. Participants must be at least 18 years old to enroll.
        </Typography>
      </Box>


      <Box>
        <Typography variant="h6" gutterBottom>
          2. Earning Points
        </Typography>
        <Typography variant="body1" gutterBottom>
          Points are earned for every purchase made at Pioxno through eligible platforms, such as our website, app, Zomato, or Swiggy. The amount of points earned per purchase is determined by Pioxno and may vary by product, promotion, or event. Points are non-transferable and have no cash value.
        </Typography>
      </Box>


      <Box>
        <Typography variant="h6" gutterBottom>
          3. Redeeming Points
        </Typography>
        <Typography variant="body1" gutterBottom>
          While you can start earning points during this early access period, redemption of points will begin once our mobile app officially launches. At that time, accumulated points can be redeemed for products, merchandise, or exclusive rewards available on the Pioxno website.
        </Typography>
      </Box>


      <Box>
        <Typography variant="h6" gutterBottom>
          4. Expiration of Points
        </Typography>
        <Typography variant="body1" gutterBottom>
          Pioxno points expire 12 months after the date they are earned, unless otherwise stated.
        </Typography>
      </Box>


      {/* Add more terms sections as needed */}
    </Container>
  );
};

export default TermsAndConditions;

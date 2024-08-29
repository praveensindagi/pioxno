import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import RedeemIcon from '@mui/icons-material/Redeem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled components
const RewardsBanner = styled(Box)({
  backgroundColor: '#dee2e6',
  color: '#000000',
  fontWeight:'500',
  padding: '60px 20px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
});

const StepContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  '@media (max-width:600px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
});

const StepIcon = styled(Box)({
  fontSize: '4rem',
  marginBottom: '10px',
  '@media (max-width:600px)': {
    fontSize: '5rem',
    marginBottom: '5px',
  },
});

const StepText = styled(Typography)({
  fontSize: '1.6rem',
  fontWeight: 'bold',
fontFamily:'serif',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
});




const StarsBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: 'radial-gradient(#ced4da 2px, transparent 2px)',
  backgroundSize: '20px 20px',
  zIndex: -1,

});

const RewardsStepsBanner = () => {
  return (
    <RewardsBanner>
      <StarsBackground />
     
      <Typography variant="h4" component="h1" gutterBottom sx={{ zIndex: 2,marginBottom:'20px',fontWeight: 'bold',}}>
        How Our Rewards Program Works
      </Typography>
      <Container sx={{ zIndex: 2 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Step 1 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <LoyaltyIcon fontSize='lg' />
            </StepIcon>
            <StepText>Join the Program</StepText>
          </StepContainer>

  

          {/* Step 2 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <ShoppingCartIcon fontSize='lg' />
            </StepIcon >
            <StepText>Make Purchases</StepText>
          </StepContainer>

          {/* Arrow 2 */}
       

          {/* Step 3 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <StarIcon fontSize='lg' />
            </StepIcon>
            <StepText>Earn Points</StepText>
          </StepContainer>

          {/* Arrow 3 */}
        

          {/* Step 4 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <RedeemIcon fontSize='lg' />
            </StepIcon>
            <StepText>Redeem Rewards</StepText>
          </StepContainer>
        </Grid>
      </Container>
    </RewardsBanner>
  );
};

export default RewardsStepsBanner;

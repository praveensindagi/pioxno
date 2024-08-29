import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';
import IOS from './ios.png';
import Android from './Android.svg';

const PageContainer = styled(Box)({
  minHeight: '100vh',
  width:'100%',
  backgroundColor: '#000000',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  position: 'relative',
});

const Title = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 'bold',
  color: '#E5E5E5', // Deep purple for the title
  textAlign: 'center',
  marginBottom: '20px',
});

const Description = styled(Typography)({
  fontSize: '2rem',
  color: '#cecccc', // Olive green for the description
  textAlign: 'center',
  marginBottom: '40px',
});

const MarketingLine = styled(Typography)({
  fontSize: '1.6rem',
  color: '#fcfcfc',
  textAlign: 'center',
  marginBottom: '20px',
});

const AppGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const PhoneContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
});

const PhoneGraphic = styled('img')({
  width: '160px', // Adjust size for your design
  height: '320px',
  objectFit: 'contain',
});

const PioxnoText = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#F4E04D',
});

const StoreLogos = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '0px',
});

const StoreLogo = styled('img')({
  width: '150px', // Adjust the size of the store logos
  height: '150px',
  margin: '0 10px',
});

const ComingSoonPage = () => {
  return (
    <PageContainer>
      <Title>Get Ready for the Pioxno Mobile App</Title>
      <Description> Coming soon! Enjoy exclusive rewards, seamless online ordering, and a whole new experience with our Pioxno mobile app.</Description>
      <MarketingLine>
        Get ready for a whole new experience. Download the Pioxno app and join the revolution!
      </MarketingLine>
      <Container maxWidth="sm"> 
      <AppGrid container spacing={4}>
        {/* Android Phone */}
     {
      /* 
       <Grid item xs={6} md={6}>
          <PhoneContainer>
            <PhoneGraphic src={Android} alt="Android Simulator" />
          </PhoneContainer>
        </Grid>
      */
     } 

        {/* Pioxno Text */}
       

        {/* iOS Phone */}
        <Grid item xs={6} md={12}>
          <PhoneContainer>
            <PhoneGraphic src={IOS} alt="iOS Simulator" />
          </PhoneContainer>
          
        </Grid>
      </AppGrid>
      </Container>
     {/*  <Typography sx={{marginTop:'40px',fontSize:'24px',fontStyle:'bold',}}> Available soon on</Typography> */}
      <StoreLogos>
        <StoreLogo src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" alt="Google Play Store" />
        <StoreLogo src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" alt="App Store" />
      </StoreLogos>
    </PageContainer>
  );
};

export default ComingSoonPage;

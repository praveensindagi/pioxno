import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled components
const HiringBanner = styled(Box)({
background:'linear-gradient(to right,  #f5f5f5 0%, #f5f5f5 100%)',
  color: '#000000',
  padding: '60px 20px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  marginTop:'20px'
});

const StepContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: '10px',
  textAlign: 'center',
  '@media (max-width:600px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
});

const StepIcon = styled(Box)({
  fontSize: '1.5rem',
  marginBottom: '10px',
  marginRight:'10px',
  '@media (max-width:600px)': {
    fontSize: '2rem',
    marginBottom: '5px',
  },
});

const StepText = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '10px',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
});

const ArrowContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  fontSize:'5px',
  justifyContent: 'center',
  '@media (max-width:600px)': {
    display: 'none',
  },
});



const DotsBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: 'radial-gradient(#333 2px, transparent 2px)',
  backgroundSize: '20px 20px',
  zIndex: 0,
  opacity:'8%',
});

const HiringStepsBanner = () => {
  return (
    <HiringBanner>
      <DotsBackground />
    
      <Typography variant="h4" component="h1" gutterBottom sx={{ zIndex: 2 }}>
        Our Hiring Process
      </Typography>
      <Container sx={{ zIndex: 2 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Step 1 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <AssignmentIcon />
            </StepIcon>
            <StepText> Apply Online</StepText>
            
          
          </StepContainer>

          {/* Arrow 1 */}
          <ArrowContainer item xs={12} md={1}>
            <ArrowForwardIcon sx={{ fontSize: '3rem', color: '#FAF3E0' }} />
          </ArrowContainer>

          {/* Step 2 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <PhoneIcon />
            </StepIcon>
            <StepText>Phone Interview</StepText>
          </StepContainer>

          {/* Arrow 2 */}
          <ArrowContainer item xs={12} md={1}>
            <ArrowForwardIcon sx={{ fontSize: '3rem', color: '#FAF3E0' }} />
          </ArrowContainer>

          {/* Step 3 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <PeopleIcon />
            </StepIcon>
            <StepText>In-Person Interview</StepText>
          </StepContainer>

          {/* Arrow 3 */}
          <ArrowContainer item xs={12} md={1}>
            <ArrowForwardIcon sx={{ fontSize: '3rem', color: '#FAF3E0' }} />
          </ArrowContainer>

          {/* Step 4 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <WorkIcon />
            </StepIcon>
            <StepText>Assessment</StepText>
          </StepContainer>

          {/* Arrow 4 */}
          <ArrowContainer item xs={12} md={1}>
            <ArrowForwardIcon sx={{ fontSize: '3rem', color: '#FAF3E0' }} />
          </ArrowContainer>

          {/* Step 5 */}
          <StepContainer item xs={12} md={2}>
            <StepIcon>
              <CheckCircleIcon />
            </StepIcon>
            <StepText> Offer & Onboarding</StepText>
          </StepContainer>
        </Grid>
      </Container>
    </HiringBanner>
  );
};

export default HiringStepsBanner;

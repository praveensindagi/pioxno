import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import TshirtIcon from '@mui/icons-material/Checkroom'; // Icon for T-shirt
import MugIcon from '@mui/icons-material/Coffee'; // Icon for Mug
import ShoesIcon from '@mui/icons-material/DirectionsRun'; // Icon for Shoes

// Styled components
const MerchandiseBanner = styled(Box)({
  backgroundColor: '#000000',
  color: '#fefae0',
  padding: '60px 20px',
  textAlign: 'center',
  marginBottom: '0px',
  position: 'relative',
  backgroundSize: '80px 80px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '10% 20%, 50% 50%, 90% 80%',
});

const ProductGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '30px',
});

const ProductBox = styled(Box)({
  textAlign: 'center',
  padding: '20px',
  
});

const ProductIcon = styled(Box)({
  fontSize: '4rem',
  color: '#aa4586',
  marginBottom: '10px',
});

const ProductName = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'aa4586',
});

const MerchandiseItemsBanner = () => {
  return (
    <MerchandiseBanner>
      <Typography variant="h4" component="h1">
        Explore Our Exclusive Merchandise
      </Typography>
      <Typography  sx={{ marginTop: '10px', fontSize:'14px' }}>
        Premium quality merchandise exclusively for Pioxno customers. Grab your favorite T-shirts, mugs, and shoes now!
      </Typography>
      <ProductGrid container spacing={3} sx={{ marginTop: '20px' }}>
        {/* T-Shirt */}
        <Grid item xs={4} md={4}>
          <ProductBox>
            <ProductIcon>
              <TshirtIcon fontSize="inherit" />
            </ProductIcon>
            <ProductName>Cloths</ProductName>
          </ProductBox>
        </Grid>

        {/* Mug */}
        <Grid item xs={4} md={4}>
          <ProductBox>
            <ProductIcon>
              <MugIcon fontSize="inherit" />
            </ProductIcon>
            <ProductName>Mugs</ProductName>
          </ProductBox>
        </Grid>

        {/* Shoes */}
        <Grid item xs={4} md={4}>
          <ProductBox>
            <ProductIcon>
              <ShoesIcon fontSize="inherit" />
            </ProductIcon>
            <ProductName>Shoes</ProductName>
          </ProductBox>
        </Grid>
      </ProductGrid>
    </MerchandiseBanner>
  );
};

export default MerchandiseItemsBanner;

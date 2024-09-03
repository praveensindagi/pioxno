import React from 'react';
import { Box, Typography ,Container} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from '@mui/system';


const FullScreenBanner = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  backgroundColor: '#000000', // Green background
  color: '#FAF3E0', // Beige font color
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '20px',
});

const BackgroundDots = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 20%, transparent 60%)',
  zIndex: 0,
});

const BannerContent = styled(Box)({
  zIndex: 1,
});
const MerchandiseShop = () => {
  return (
    <Box sx={{ width: '100%', margin: '0 auto', maxWidth: '1200px', mt: 20 }}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        swipeable
      >
         <Box>
        <FullScreenBanner>
            <BackgroundDots />
            <BannerContent>
                <Typography variant="h2" component="h1" gutterBottom>
                    Exclusive Nike Limited Edition Shoes
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom sx={{color:'white'}}>
                    Available Only for <Typography variant="h4" component="i"  sx={{color:'red'}}> Invite-Only </Typography>  Members
                </Typography>
               
            </BannerContent>
        </FullScreenBanner>
        </Box>
        <Box sx={{ backgroundColor: '#fcfcfc', color: '#333', padding: 4 }}>
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>
            Explore Our Exclusive Merchandise
          </Typography>
          <Typography variant="h5" align="center">
            High-Quality Products at Unbeatable Prices
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: '#fff', color: '#000', padding: 4 }}>
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>
            Limited Edition Collections
          </Typography>
          <Typography variant="h5" align="center">
            Grab Yours Before They're Gone!
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: '#f5f5f5', color: '#333', padding: 4 }}>
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>
            Stylish and Comfortable
          </Typography>
          <Typography variant="h5" align="center">
            Apparel, Accessories, and More
          </Typography>
        </Box>
       
      </Carousel>
    </Box>
  );
};

export default MerchandiseShop;

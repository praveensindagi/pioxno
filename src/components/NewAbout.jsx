import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import BadgeIcon from '@mui/icons-material/Badge';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DiamondIcon from '@mui/icons-material/Diamond';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import { Grid,Paper } from '@mui/material';
import { styled } from '@mui/system';



const ScrollAnimationComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Component should be 10% visible to trigger the animation
  });
  const CoreValueItem = styled(Paper)({
    padding: '20px',
    textAlign: 'center',
    height: '100%',
});
  

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

const AboutPioxno = () => {
 
  return (
    <Box sx={{ fontFamily: 'Georgia, serif' }}>
      {/* About Pioxno Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#f5f5f5',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            About Pioxno
          </Typography>
          <Container>

         
          <Typography variant="body1"  sx={{ lineHeight:1.8,fontSize:'20px' , '@media (max-width: 600px)': {
        fontSize: '14px',textAlign:'justify'
         // Smaller font size for mobile screens
      },}}>
            Pioxno is a leading innovator in the foodtech industry, driving transformation across the dining landscape with our multi-brand approach. Our portfolio encompasses a diverse range of culinary experiences, including Italian, Indian, and high-protein foods, available through top-tier delivery platforms like Zomato and Swiggy. At Pioxno, we are committed to excellence in every aspect of our business, from the quality of our products to the service we provide. We believe in setting new standards for customer satisfaction, leveraging cutting-edge technology, and sustainable practices to redefine the future of dining.
          </Typography> </Container>
        </Box>
      </ScrollAnimationComponent>

      {/* Our Mission Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#fff',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Our Mission
          </Typography> <Container>
          <Typography variant="h6"  sx={{ lineHeight:1.8,fontSize:'20px',  '@media (max-width: 600px)': {
           fontSize:'14px',textAlign:'justify' // Smaller font size for mobile screens
          }}}>
            At Pioxno, our mission is to deliver an unparalleled culinary experience that caters to the evolving tastes and preferences of our customers. We strive to be the preferred choice for those seeking not just a meal, but a memorable dining experience. Through continuous innovation, we are dedicated to maintaining the highest standards of quality and convenience, ensuring that our customers can enjoy exceptional food wherever they are.
          </Typography></Container>
        </Box>
      </ScrollAnimationComponent>

      {/* Our Vision Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#f5f5f5',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Our Vision
          </Typography>
          <Container>
          <Typography variant="h6" sx={{ lineHeight:1.8,fontSize:'20px', '@media (max-width: 600px)': {
           fontSize:'14px',textAlign:'justify' // Smaller font size for mobile screens
          }}}>
            We envision Pioxno as a global leader in the foodtech sector, renowned for our commitment to innovation, customer satisfaction, and operational excellence. Our vision is to expand our footprint across new markets and continuously enhance our offerings, setting benchmarks that define the future of the industry. By embracing emerging technologies and sustainable practices, we aim to shape a better dining experience for consumers around the world.
          </Typography></Container>
        </Box>
      </ScrollAnimationComponent>

      {/* Core Values Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#fff',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Our Core Values
          </Typography>
          <Container>
            <Grid container spacing={4}  >
              <Grid item md={6} >
                 <Box  >
                  <Typography variant='h2'>Integrity</Typography>
                 </Box>
              </Grid>
              <Grid item md={6}>
                 <Box sx={{justifyContent:'center'}}>
                  <Typography variant='h2'>Innovation</Typography>
                 </Box>
              </Grid>
              <Grid item md={6}>
                 <Box sx={{justifyContent:'center'}}>
                  <Typography variant='h2'>Quality</Typography>
                 </Box>
              </Grid>
              <Grid item md={6}>
                 <Box sx={{justifyContent:'center'}}>
                  <Typography variant='h2'>Sustainability</Typography>
                 </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ScrollAnimationComponent>

      {/* Strategic Objectives Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#f5f5f5',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Strategic Objectives
          </Typography> 
          <Container>
            <Grid container spacing={4}  >
              <Grid item md={6} >
                 <Box sx={{justifyContent:'center'}} >
                  <Typography variant='h2'>Market Leadership</Typography>
                 </Box>
              </Grid>
              <Grid item md={6}>
                 <Box sx={{justifyContent:'center'}}>
                  <Typography variant='h2'>Operational Excellence</Typography>
                 </Box>
              </Grid>
              <Grid item md={6}>
                 <Box sx={{justifyContent:'center'}}>
                  <Typography variant='h2'>Technology Integration</Typography>
                 </Box>
              </Grid>
              <Grid item md={6}>
                 <Box sx={{justifyContent:'center'}}>
                  <Typography variant='h2'>Brand Differentiation</Typography>
                 </Box>
              </Grid>
            </Grid>
          </Container>
        
         
        </Box>
      </ScrollAnimationComponent>

      {/* Our Merchandise Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#fff',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3, }}>
          Merchandise
          </Typography> <Container>
          <Typography variant="h6"  sx={{ lineHeight:1.8,fontSize:'20px','@media (max-width: 600px)': {
           fontSize:'14px',textAlign:'justify' // Smaller font size for mobile screens
          } }}>
            In addition to our exceptional culinary offerings, Pioxno is proud to offer a range of merchandise, including high-quality t-shirts. Our merchandise reflects our commitment to style and quality, providing our customers with a way to show their support for our brand.
          </Typography></Container>
        </Box>
      </ScrollAnimationComponent>

      {/* Upcoming Clothing Brand Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#f5f5f5',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Upcoming Clothing Brand
          </Typography> <Container>
          <Typography variant="h6" sx={{ lineHeight:1.8,fontSize:'20px','@media (max-width: 600px)': {
           fontSize:'14px',textAlign:'justify' // Smaller font size for mobile screens
          } }}>
            We are excited to announce the upcoming launch of our new clothing brand project. This venture will expand our footprint beyond food and merchandise, offering a fresh and innovative range of apparel that embodies the spirit and values of Pioxno. Stay tuned for more updates as we prepare to unveil this new chapter in our brand's journey.
          </Typography></Container>
        </Box>
      </ScrollAnimationComponent>

      {/* Why Pioxno Section */}
      <ScrollAnimationComponent>
        <Box sx={{
          backgroundColor: '#fff',
          color: '#333',
          padding: 8,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          '@media (max-width: 600px)': {
            
            padding: 2, // Smaller font size for mobile screens
          },
        }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Why Pioxno?
          </Typography> <Container>
          <Typography variant="h6"  sx={{ lineHeight:1.8,fontSize:'20px' ,'@media (max-width: 600px)': {
           fontSize:'14px',textAlign:'justify' // Smaller font size for mobile screens
          }}}>
            Choosing to work with or for Pioxno means being part of a dynamic and forward-thinking organization that values innovation, quality, and customer-centricity. We offer a challenging and rewarding environment where you can make a meaningful impact on the future of the food industry and beyond. Join us in our mission to redefine dining and create exceptional experiences for our customers worldwide.
          </Typography></Container>
        </Box>
      </ScrollAnimationComponent>
    </Box>
  );
};

export default AboutPioxno;

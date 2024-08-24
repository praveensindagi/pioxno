import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import { styled } from '@mui/system';


const FullScreenBanner = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#013414', // Green background
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

const Section = styled('div')({
    marginBottom: '40px',
});

const Banner = styled('div')({
    backgroundColor: '#f4f4f4',
    padding: '40px 20px',
    textAlign: 'center',
    marginBottom: '40px',
});

const Headline = styled(Typography)({
    color: 'green',
    marginBottom: '20px',
    fontWeight: 'bold',
});

const ProductCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
});

const ProductMedia = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9
});

const ProductContent = styled(CardContent)({
    flexGrow: 1,
});

const marketingPickUpLines = [
    "Exclusive Merchandise for Pioxno Customers!",
    "Experience the Ultra Premium Pioxno T-Shirts!",
    "Stay Hydrated with Pioxno Bottles!",
    "Redeem Your Rewards Towards All Categories!",
];



const MerchandiseHome = () => {
    return (
        <>
        <Container sx={{ paddingY: 4 }}>
            {/* Banner Section */}
            

            {/* About Section */}
      

            {/* Products Section */}
           

            {/* Perks Section */}
     
            {/* How to Join Section */}
           

            {/* Customer Reviews Section */}
         
        </Container>
        <FullScreenBanner>
            <BackgroundDots />
            <BannerContent>
                <Typography variant="h2" component="h1" gutterBottom>
                    Exclusive Nike Limited Edition Shoes
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom sx={{color:'white'}}>
                    Available Only for <Typography variant="h4" component="i"  sx={{color:'red'}}> Invite-Only </Typography>  Members
                </Typography>
                <Container maxWidth='sm'>
                <Typography variant="body1" paragraph>
                    Discover our latest limited edition shoes, designed to elevate your style with unmatched exclusivity. Available only to our invite-only members, these premium shoes are crafted with the highest quality materials and feature a unique design that sets you apart from the crowd. Don’t miss your chance to own a piece of this exclusive collection.
                </Typography>
                </Container>
            </BannerContent>
        </FullScreenBanner>
        
         <Section id='joec'>
         <Typography variant="h4" component="h2" gutterBottom sx={{textAlign:'center'}}>
             Join Our Exclusive Community
         </Typography>
         <Typography variant="body1" sx={{textAlign:'center'}} paragraph> 
             Interested in becoming an invite-only member? Here’s how you can join:
         </Typography>
        
         <Typography variant="body1" sx={{textAlign:'center'}}  paragraph>
             <ol>
                 <li>Receive an Invitation: Invitations are sent to our most loyal customers based on their engagement and purchase history.</li>
                 <li>Accept the Invitation: Once you receive your invitation, follow the instructions to accept and become a part of our exclusive community.</li>
                 <li>Enjoy the Perks: Start enjoying the exclusive benefits and access to our premium merchandise immediately.</li>
             </ol>
         </Typography>
         <Box sx={{ textAlign: 'center' }}>
             <Button variant="contained"  id='jobapplybuttonfinal'  color="primary" sx={{ marginRight: 2 }}>
                 Learn More
             </Button>
             <Button variant="outlined"  id='jobapplybutton' color="primary">
                 Contact Us for More Details
             </Button>
         </Box>
     </Section>
     </>
    );
};

export default MerchandiseHome;

import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MerchandiseItemsBanner from './MerchandiseItemsBanne';

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
    background:' linear-gradient(to right,  #2d6a4f 0%, #1b4332 100%)',
    padding: '120px 40px',
    textAlign: 'center',
    marginTop:'40px',
   
});

const Headline = styled(Typography)({
  color:'beige',
    marginBottom: '20px',
   
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
];



const MerchandiseHome = () => {
    return (
        <>
       
            {/* Banner Section */}
           
            <Banner>
                <Headline variant="h3" component="h1">Pioxno Merchandise</Headline>
                <Typography variant="h5" sx={{color:'white'}} gutterBottom>
                    {marketingPickUpLines[0]}
                </Typography>
                
                
            </Banner>
            <MerchandiseItemsBanner/>

            <div className="comingsoon">
                <Typography  component="h1"  sx={{textAlign:'center',fontSize:'20px'}}>Products are Listing Soon </Typography>
            </div>
           <Container sx={{ paddingY: 4 }}>
            {/* Products Section */}
            <Section>
               <Grid container>

              
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ textAlign: 'left', padding: '20px' }}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Exclusive Pioxno Merchandise
                            </Typography>
                       
                            <Typography variant="body1" paragraph>
                                At Pioxno, we offer a range of exclusive merchandise designed for our valued customers. Our products, including the Ultra Premium T-Shirts and durable Bottles, are crafted with the highest quality materials to ensure comfort and satisfaction.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Our T-Shirts are made from premium fabric that feels great against your skin and lasts wash after wash. The Pioxno Bottle is your perfect companion for staying hydrated on the go, whether you're at the gym, office, or out for a walk.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Don't forget, your rewards can be redeemed towards all categories of our merchandise. Enjoy the best Pioxno has to offer, and show your support with our exclusive range.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{ textAlign: 'left', padding: '20px' }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                    Why Choose Pioxno Invite-Only Merchandise?
                </Typography>
                <Typography variant="body1" paragraph>
                    Pioxno is proud to offer an exclusive range of merchandise, available only to our invite-only members. This unique collection features premium products, including our ultra-premium T-Shirts and stylish bottles, crafted with the highest quality materials. Our invite-only members enjoy special perks, personalized service, and the satisfaction of owning limited-edition items that are not available to the general public.
                </Typography>
                        </Box>
                    </Grid>
                    </Grid> 
            </Section>
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
             <Button variant="contained"  id='jobapplybuttonfinal'  color="primary" sx={{ margin: 1 }}>
                 Learn More
             </Button>
             <Button variant="outlined"  id='jobapplybutton' color="primary"  sx={{ margin: 1 }}>
                 Contact Us for More Details
             </Button>
         </Box>
     </Section>
        
        </>
    );
};

export default MerchandiseHome;

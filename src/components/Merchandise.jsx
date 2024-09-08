import React from 'react';
import { Container, Typography, Grid,  Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Helmet } from 'react-helmet';

import MerchandiseItemsBanner from './MerchandiseItemsBanne';
import ProductListingPage from './ProductListingPage';
import MerchandiseShop from './MerchandiseShop';













const Section = styled('div')({
    marginBottom: '40px',
});






const MerchandiseHome = () => {
    return (
        <>
          <Helmet>
      <title>Pioxno Merchandise | Stylish Apparel & Accessories</title>
      <meta name="description" content="Explore Pioxno's exclusive merchandise, including stylish apparel and accessories. Shop our collection of high-quality products and show your support for Pioxno." />
      <meta name="keywords" content="Pioxno merchandise, apparel, accessories, stylish clothing, shop Pioxno, exclusive products" />
    </Helmet>
            {/* Banner Section */}
           <MerchandiseShop />
          
          

    
              

               <ProductListingPage/>
             
          
        
       
        
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
             <Button href='/JoinNow' variant="contained"  id='jobapplybuttonfinal'  color="primary" sx={{ margin: 1 }}>
                 Join Now
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

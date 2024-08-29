import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box , CardActions} from '@mui/material';
import { styled } from '@mui/system';
import Taste from './Taste.png';
import Green from './Green.png';
import Barista from './PioxnoBarista.png';
import Pohawala from './Pohawala.png';
// Styled components
const Banner = styled(Box)({
   
    color: '#333',
    padding: '120px 5px',
    textAlign: 'center',
    position: 'relative',
    marginTop:'30px',
});

const RestaurantCard = styled(Card)({
    width: '100%',
    
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: 'none', // No shadow
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
    },
});

const CardImage = styled(CardMedia)({
    height: 200,
    backgroundSize: 'cover',
   
});

const SpecializationBanner = styled(Box)({
   
    padding: '20px',
    marginBottom: '40px',
    borderRadius: '10px',
});

const Brands = () => {
    return (
        <>
            {/* Banner Section */}
            <Banner>
                <Typography  variant="h1" component="h2" sx={{color:'#333'}}  gutterBottom>
                    Discover Our Brands
                </Typography>
              
            </Banner>

            <Container>
            {/* Restaurant Cards Section */}
            <SpecializationBanner>
                <Typography variant="h4" component="h2" gutterBottom>
                    Our Signature Restaurants
                </Typography>
                <Typography variant="body1" sx={{fontSize:'13px'}} paragraph>
                    Each of our restaurants offers a distinct dining experience with exceptional cuisine. From Italian classics to Indian delights and high-protein options, discover the flavors that make each brand special.
                </Typography>
            </SpecializationBanner>

            <Grid container spacing={4} justifyContent="center">
                {/* Restaurant 1 */}
                <Grid item xs={12} sm={6} md={3}>
                    <RestaurantCard>
                        <CardImage
                            image={Taste}
                            title="Taste Of Pioxno"
                        />
                        <CardContent>
                            <Typography variant="h6" component="h3" sx={{fontSize:'14px'}}>
                               Taste of Pioxno
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" sx={{fontSize:'12px'}}>
                            Discover innovative fusion dishes that blend global flavors for a unique and exciting culinary experience.

                            </Typography>
                        </CardContent>
                    </RestaurantCard>
                </Grid>

                {/* Restaurant 2 */}
                <Grid item xs={12} sm={12} md={3}>
                    <RestaurantCard>
                        <CardImage
                           
                            image={Pohawala}
                            title="Pohawala By Pioxno"
                        />
                        <CardContent>
                            <Typography variant="h6" component="h3" sx={{fontSize:'14px'}}> 
                              Pohawala By Pioxno
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{fontSize:'12px'}} component="p">
                                Experience the rich flavors of India with our diverse menu featuring traditional Pohas, Chai's and more.
                            </Typography>
                        </CardContent>
                        <CardActions>
                           
                        </CardActions>
                    </RestaurantCard>
                </Grid>

                {/* Restaurant 3 */}
                <Grid item xs={12} sm={12} md={3}>
                    <RestaurantCard>
                        <CardImage
                            image={Barista}
                            title="Pioxno Barista"
                        />
                        <CardContent>
                            <Typography variant="h6" component="h3"  sx={{fontSize:'14px'}}>
                                Pioxno Barista
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{fontSize:'12px'}} component="p">
                            Indulge in authentic Italian cuisine with our signature pasta, pizzas, and more, crafted from the finest ingredients.

                            </Typography>
                        </CardContent>
                    </RestaurantCard>
                </Grid>

                {/* Restaurant 4 */}
                <Grid item xs={12} sm={12} md={3}>
                    <RestaurantCard>
                        <CardImage
                            image={Green}
                            title="GrrenFoods By Pioxno"
                        />
                        <CardContent>
                            <Typography variant="h6" component="h3" sx={{fontSize:'14px'}}>
                               GreenFoods by Pioxno
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{fontSize:'12px'}} component="p">
                            Fuel your fitness journey with our high-protein dishes, designed to meet your dietary needs while satisfying your taste buds.

                            </Typography>
                        </CardContent>
                    </RestaurantCard>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Brands;

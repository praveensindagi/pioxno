import React, { useState } from 'react';

import { Box, Typography, Button, Grid, Divider, InputAdornment, IconButton, Rating, FormControl, InputLabel, Select, MenuItem, TextField, Container } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import product from './product/Ptshirt.jpeg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductDrawer from './ProductDrawer.jsx';

const ProductDescription = () => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [pincode, setPincode] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState('');

    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['Black', 'White', 'Black & White'];
  
    const colorStyles = {
        Black: { backgroundColor: '#000', color: 'white' },
        White: { backgroundColor: '#FFF', border: '1px solid #000' },
        'Black & White': { backgroundColor: 'linear-gradient(to right, #000, #FFF)' }
    };

    const checkDelivery = () => {
        if (pincode.length === 6) {
            const availablePins = ['110001', '560001', '400001'];
            setDeliveryStatus(availablePins.includes(pincode) ? 'Available for delivery at this location' : 'Not available for delivery at this location');
        } else {
            setDeliveryStatus('Please enter a valid 6-digit pincode');
        }
    };

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleAddToBag = () => {
        setDrawerOpen(true);
    };
    
    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };
    
    return (
        <Box mt={15}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={product} alt="Pioxno DryCell Active Wear" width="100%" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ color: '#333' }}>
                            Pioxno DryCell Active Wear
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'brown', fontWeight: 'bold' }} gutterBottom>
                            Exclusive Collection
                        </Typography>
                        <Divider sx={{ bgcolor: 'white', mb: 2, width: '100%' }} />
                        <Typography variant="h6" gutterBottom>
                            Select Size
                        </Typography>
                        <Box display="flex" gap={2} mb={2}>
                            {sizes.map(size => (
                                <IconButton
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    sx={{
                                        borderRadius: '50%',
                                        width: 45,
                                        height: 45,
                                        backgroundColor: selectedSize === size ? 'primary.main' : 'white',
                                        color: selectedSize === size ? 'white' : 'black',
                                        border: '1px solid black',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {size}
                                </IconButton>
                            ))}
                        </Box>

                        <Typography variant="h6" gutterBottom>
                            Select Color
                        </Typography>
                        <Box display="flex" gap={2} mb={2}>
                            {colors.map(color => (
                                <IconButton
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    sx={{
                                        borderRadius: '50%',
                                        width: 45,
                                        height: 45,
                                        backgroundColor: selectedColor === color ? colorStyles[color].backgroundColor : '#E0E0E0',
                                        color: 'black',
                                        border: '1px solid black',
                                        '&:hover': {
                                            backgroundColor: colorStyles[color].backgroundColor,
                                        }
                                    }}
                                >
                                    {color === 'Black & White' ? 'B&W' : color[0]}
                                </IconButton>
                            ))}
                        </Box>

                        <Box display="flex" alignItems="center" mt={5} mb={5}>
                            <Typography variant="h5">Price: </Typography>
                            <Box display="flex" alignItems="center" ml={1}>
                                <CurrencyRupeeIcon fontSize="medium" />
                                <Typography variant="h5">1995.00</Typography>
                            </Box>
                        </Box>
        
                        <Box mt={1}>
                            <Button
                                sx={{
                                    width: '100%',
                                    height: '40px',
                                    border: '2px solid black',
                                    color: 'white',
                                    bgcolor: 'black',
                                    opacity: '50%',
                                    '&:hover': {
                                        cursor: 'pointer',
                                        backgroundColor: 'white',
                                        color: 'black'
                                    }
                                }}
                                size="large"
                                onClick={handleAddToBag}
                            >
                                Sold Out
                            </Button>
                        </Box>
                        <Box mt={1}>
                            <Button sx={{ width: '100%', height: '40px', border: '1px solid black', color: 'black' }}>
                                Favourite <FavoriteBorderIcon />
                            </Button>
                        </Box>

                        <Typography sx={{ display: 'flex' }} mt={5} mb={1} gutterBottom>
                            <Typography mr={1}>Check Delivery Time</Typography> <LocalShippingIcon />
                        </Typography>
                        <Grid container>
                            <Grid item sm={12} md={6} mt={1}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Enter 6-digit pincode"
                                    placeholder="Enter pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Button onClick={checkDelivery}>Check</Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item sm={12} md={6}>
                                <Typography>
                                    {deliveryStatus && (
                                        <Typography variant="body1" mt={2}>
                                            {deliveryStatus}
                                        </Typography>
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Typography mt={5} variant="h6" gutterBottom>
                    Key Features
                </Typography>
                <Grid container spacing={2} mb={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">• Moisture-Wicking Fabric</Typography>
                        <Typography variant="body2">The DryCell technology ensures that sweat is quickly absorbed and evaporated, keeping you dry and comfortable during intense workouts.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">• Breathable Material:</Typography>
                        <Typography variant="body2"> Made from lightweight, breathable fabric that allows for optimal airflow, ensuring you stay cool even during high-intensity activities.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">•  
                        Comfortable Fit</Typography>
                        <Typography variant="body2">The T-shirt is designed with a relaxed fit that offers comfort without compromising on style or mobility.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">• Durable Construction</Typography>
                        <Typography variant="body2"> High-quality stitching and materials ensure that the T-shirt withstands regular wear and tear, maintaining its shape and color even after multiple washes.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">• 
                        Stylish Design</Typography>
                        <Typography variant="body2">The T-shirt features a modern, athletic design that is perfect for both workouts and casual wear, with options for different colors and sizes.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1">• Anti-Odor Technology</Typography>
                        <Typography variant="body2">Built-in anti-odor properties keep the T-shirt fresh for longer, even after rigorous exercise sessions.</Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ bgcolor: 'white', mb: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Product Specifications
                </Typography>
                <Typography variant="body2" gutterBottom>
                    • Fabric: 100% Polyester with DryCell technology<br />
                    • Fit: Slim fit<br />
                    • Sizes Available: S, M, L, XL<br />
                    • Colors: Black, White, Black & White<br />
                    • Care Instructions: Machine wash cold, tumble dry low<br />
                    
                </Typography>

                <Divider sx={{ bgcolor: 'white', mb: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Performance Meets Style
                </Typography>
                <Typography variant="body1" gutterBottom>
                    The Pioxno DryCell Active Wear is designed for those who demand both performance and style. Whether you're working out or simply embracing an active lifestyle, this activewear offers the comfort, durability, and design you need to look and feel your best.
                </Typography>
            </Container>
        </Box>
    );
};

export default ProductDescription;

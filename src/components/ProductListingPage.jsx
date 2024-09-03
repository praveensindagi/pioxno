import React, { useState } from 'react';
import {
  Container, Grid, Card, CardMedia, CardContent, Typography, Button, IconButton, Box,
  Select,Link, MenuItem, FormControl, InputLabel, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import tshirtm from './product/Ptshirt.jpeg';

import tshirtw from './product/pdryfitw.jpeg';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ProductDescription from './ProductDescription';
import PaymentBanner from './PaymentBanner';

const products = [

  {
    id: 2,
    name: 'Pioxno T-shirt',
    image: tshirtm,
    description: 'Men dry-fit black color ',
    price: '1995.00',
  },

  // Add
 
  // Add
  // Add more products as needed
];

const ProductListing = () => {
  const [sortBy, setSortBy] = useState('');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Implement sort logic here based on selected value
  };

  const toggleFilterDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setFilterDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleFilterDrawer(false)}
      onKeyDown={toggleFilterDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Filter by Category" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Men" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Women" />
        </ListItem>
       
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Filter by Price" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="0 to 999" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="999 to 2999" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="2999 to 9999" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container  sx={{  height: 'auto', paddingTop: 4 , marginBottom:'20px'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, backgroundColor:'#f5f5f5',padding:'20px' }}>
        <FormControl sx={{ minWidth: 250 ,}}>
          <InputLabel id="sort-by-label">
            <SortIcon sx={{ verticalAlign: 'middle', mr: 1, }} /> Sort By
          </InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            label="Sort By"
            onChange={handleSortChange}
          >
            <MenuItem value={'priceAsc'}>Popularity</MenuItem>
            <MenuItem value={'priceAsc'}>Price: Low to High</MenuItem>
            <MenuItem value={'priceDesc'}>Price: High to Low</MenuItem>
            <MenuItem value={'nameAsc'}>Name: A-Z</MenuItem>
            <MenuItem value={'nameDesc'}>Name: Z-A</MenuItem>
          </Select>
        </FormControl>

        <IconButton
          color="#333"
          onClick={toggleFilterDrawer(true)}
        >
          <FilterListIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={filterDrawerOpen}
          onClose={toggleFilterDrawer(false)}
        >
          {list()}
        </Drawer>
      </Box>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
         <a href='ProductDescription' style={{ textDecoration: 'none' }}>
     

            <Card sx={{ height: '100%' }}  elevation={0}>
              <CardMedia
                component="img"
                height="350"
                image={product.image}
                alt={product.name}
                sx={{backgroundPosition:'cover',backgroundRepeat:'no-repeat'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.description}
                </Typography>
                <Grid container mt={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <Grid item md={10} sm={12}> 
                <Box display="flex" alignItems="center" >
      <Typography variant="h6" sx={{fontWeight:'bold'}}>MRP:</Typography>
      <Box display="flex" alignItems="center" ml={1}>
        <CurrencyRupeeIcon fontSize="small" sx={{fontWeight:'bold'}} />
        <Typography variant="h6" sx={{fontWeight:'bold'}}>{product.price}</Typography>
      </Box>
      
    </Box>
    
             
                </Grid>
               


              </Grid>
              </CardContent>
             
            </Card>
            </a>
          </Grid>
        ))}
      </Grid>
      <PaymentBanner/>
    </Container>
    
  );
};

export default ProductListing;

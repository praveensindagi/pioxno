import React, { useState } from 'react';
import {
  Container, Grid, Card, CardMedia, CardContent, Typography, Button, IconButton, Box,
  Select, MenuItem, FormControl, InputLabel, Drawer, List, ListItem, ListItemText, Divider
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import Product from './product.png';

const products = [
  {
    id: 1,
    name: 'Pioxno Basic',
    image: Product,
    description: 'Pioxno basic round neck t-shirt',
    price: 'Cooming Soon',
  },
  {
    id: 2,
    name: 'Pioxno T-shirt',
    image: Product,
    description: 'Women\'s Running Shoe',
    price: 'Cooming Soon',
  },
  {
    id: 1,
    name: 'Pioxno Polo Tshirt',
    image:Product,
    description: 'Men\'s Running Shoe',
    price: 'Cooming Soon',
  },
  {
    id: 2,
    name: 'Pioxno Coffe cup',
    image: Product,
    description: 'Women\'s Running Shoe',
    price: 'Soon',
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, backgroundColor:'#fcfcfc',padding:'20px' }}>
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="sort-by-label">
            <SortIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> Sort By
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
          color="primary"
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
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.description}
                </Typography>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <Grid item md={9}> 
                <Typography variant="h5" >
                  {product.price}
                </Typography>
                </Grid>
                <Grid item md={2} lg={1}> 
                <IconButton>
                  <AddShoppingCartIcon fontSize='large' sx={{color:'black'}}/>
                </IconButton>
</Grid>
<Grid item md={1} lg={1}> 
<IconButton >
                  <FavoriteBorderIcon fontSize='large' sx={{color:'black'}} />
                </IconButton>
</Grid>

              </Grid>
              </CardContent>
             
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductListing;

import React, { useState } from 'react';
import { Drawer, Box, Button, Typography, Grid, IconButton, Card, CardMedia, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Product from './product/Ptshirt.jpeg';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductDrawer = ({ product, open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
     
      sx={{ padding:'50px' }}
    >
      <Box sx={{ width: '100%', padding: 4 }}>
        <IconButton onClick={onClose} sx={{ float: 'right' }}>
          <CloseIcon />
        </IconButton>
       <Box>
        <Card sx={{ display: 'flex' }} elevation={0}>
           
              <CardMedia
                component="img"

                width="30%"
                height="100"
                image={Product}
                alt="Tshirt "
                sx={{backgroundPosition:'cover',backgroundRepeat:'no-repeat'}}
              /> <CardContent>
                 <Typography >
                    Pioxno DryCell Tshirt
                 </Typography>
                 <Typography>Size: S              </Typography>
                 <Typography>Color: S              </Typography>
                 <Box display="flex" alignItems="center" >
      <Typography variant="h6" sx={{fontWeight:'bold'}}>MRP:</Typography>
      <Box display="flex" alignItems="center" ml={1}>
        <CurrencyRupeeIcon fontSize="small" sx={{fontWeight:'bold'}} />
        <Typography variant="h6" sx={{fontWeight:'bold'}}>{product.price}</Typography>
      </Box>
      </Box>
              </CardContent>
        </Card>
       </Box>

        <Button
          
          sx={{width:'100%',height:'40px',border:'1px solid black',color:'black',marginTop:'10px'}}
        >
          View Bag
        </Button>
        <Button sx={{width:'100%',height:'40px',border:'2px solid black',color:'white',bgcolor:'black',  marginTop:'10px', '&:hover': {
      cursor: 'pointer',
      backgroundColor:'white',
      color:'black',
   }}}
          variant="contained"
          color="primary"
          fullWidth
         
        >
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
};
export default ProductDrawer;

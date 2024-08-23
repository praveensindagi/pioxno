import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Rating } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const FoodItemCard = ({ name, photo, price, rating }) => {
  return (
    <Card id="Carddetails" sx={{ maxWidth: 445, m: 2 ,borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt={name}
        sx={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Rating name="read-only" value={rating}  sx={{ m:1}} readOnly precision={0.5} />
        <Typography variant="h5" sx={{ m:1}} color="text.secondary">
          <p>< CurrencyRupeeIcon/>  {price} </p> 
        </Typography>
      </CardContent>
      <CardActions>
        <Button  id='orderButton' size="Large" variant="outlined" fullWidth>
          Order Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default FoodItemCard;

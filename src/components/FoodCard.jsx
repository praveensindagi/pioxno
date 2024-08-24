import React from 'react';
import FoodItemCard from './FoodItemCard';
import { Container, Box } from '@mui/material';

const FoodCard = () => {
  const foodItems = [
    {
      name: 'Mom Poha',
      photo: 'https://media.istockphoto.com/id/501425188/photo/poha-popular-indian-breakfast.jpg?s=612x612&w=0&k=20&c=nqZpRUKEnRpKhBThiG0l1j1UzLIyq5HvysW6nRBf55w=',
      price: 159,
      rating: 4.9,
    },
    {
      name: 'Bombay VadaPav',
      photo: 'https://ministryofcurry.com/wp-content/uploads/2024/06/vada-pav-3.jpg',
      price: 79,
      rating: 4.6,
    },
    {
        name: 'Elaichi Tea',
        photo: 'https://www.nestleprofessional.in/sites/default/files/2021-08/Elaichi-Chai.jpg',
        price: 129,
        rating: 4.9,
      },
      {
        name: 'Elaichi Tea',
        photo: 'https://www.nestleprofessional.in/sites/default/files/2021-08/Elaichi-Chai.jpg',
        price: 249,
        rating: 4.9,
      },
      
    // Add more food items as needed
  ];

  return (
    <Container>
      <Box display="flex" flexDirection="row"xs={6} justifyContent="center" flexWrap="wrap">
        {foodItems.map((item, index) => (
          <FoodItemCard
            key={index}
            name={item.name}
            photo={item.photo}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </Box>
    </Container>
  );
};



export default FoodCard;

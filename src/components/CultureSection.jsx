import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';


const cultureData = [
    {
      icon: <LocalDiningIcon fontSize="large"  style={{color:'#000000'}}/>,
      title: 'Foodtech Innovation',
      description: 'Pioxno is a fast-growing foodtech startup with multibrand outlets.'
    },

    {
      icon: <WorkIcon fontSize="large"  style={{color:'#000000'}}/>,
      title: 'Passionate Work Culture',
      description: 'Pioxno is passionate about work culture, supporting and implementing high standards.'
    },
    {
      icon: <StarIcon fontSize="large" style={{color:'#000000'}} />,
      title: 'High Standards',
      description: 'We implement high standards of working culture and quality time with employees.'
    },
    {
      icon: <EmojiEventsIcon fontSize="large"  style={{color:'#000000'}}/>,
      title: 'Rewarding Excellence',
      description: 'We recognize and reward excellence and dedication in our team.'
    }
  ];
  

const CultureSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <h3 >
          Our Culture
        </h3>
        <hr />
        <Typography variant="h6" component="p" color="textSecondary">
        At Pioxno, we are a fast-growing foodtech startup with a passion for excellence. Our multibrand outlets are dedicated to providing an exceptional dining experience, and we take pride in being customer-focused. We reward our loyal customers with amazing perks, making every meal memorable.

Our commitment to work culture is at the heart of everything we do. We support and implement the highest standards of working culture, ensuring a positive and productive environment. At Pioxno, we value quality time with our employees, fostering a community where everyone can thrive.

Join us and be part of a team that values passion, excellence, and a supportive work environment. Together, we can achieve great things.        </Typography>
      </Box>
      <Grid container spacing={4}>
        {cultureData.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              {item.icon}
              <Typography variant="h6" component="h3" gutterBottom style={{ fontSize:'14px'}}>
                {item.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" style={{ fontSize:'12px'}}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CultureSection;

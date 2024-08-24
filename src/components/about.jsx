import React from 'react';
import { Container, Typography, Grid,  Paper } from '@mui/material';
import { styled } from '@mui/system';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import BadgeIcon from '@mui/icons-material/Badge';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DiamondIcon from '@mui/icons-material/Diamond';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
const Section = styled('div')({
    marginBottom: '20px',
});

const CoreValueItem = styled(Paper)({
    padding: '20px',
    textAlign: 'center',
    height: '100%',
});

const About = () => {
    const goals=[
        {
          title:'Market Expansion',
          description:' We aim to expand our presence in new markets, leveraging our strong brand portfolio and delivery partnerships to reach more customers.',
          icon:<QueryStatsIcon fontSize="large" style={{color:'#2d6a4f'}} />,
        },
        {
            title:'Operational Excellence',
            description:'We focus on optimizing our operations, from supply chain management to customer service, ensuring efficiency and superior quality at every touchpoint',
            icon:<SettingsIcon fontSize="large" style={{color:'#2d6a4f'}} />,
          },
          {
            title:'Technological Advancements',
            description:'We invest in the latest technologies to enhance our ordering, delivery, and customer engagement processes, providing a seamless and convenient experience for our customers.',
            icon:<TravelExploreIcon fontSize="large" style={{color:'#2d6a4f'}} />,
          },
          {
            title:'  Brand Differentiation',
            description:'We continuously innovate our menu offerings and marketing strategies to differentiate our brands, creating a unique value proposition that sets us apart from competitors.',
            icon:<PermIdentityIcon fontSize="large" style={{color:'#2d6a4f'}} />,
          },
        
    ]
  const coreValues = [
    {
        title: 'Customer-Centricity',
        description: 'Our customers are the cornerstone of our business. We prioritize their needs, seek their feedback, and strive to exceed their expectations with every meal we serve.',
        icon: <EmojiPeopleIcon fontSize="large" style={{color:'#2d6a4f'}} />,
    },
    {
        title: 'Innovation',
        description: 'Innovation is at the heart of everything we do. We continually explore new ideas, technologies, and culinary trends to stay ahead of the curve and offer unique, exciting dining experiences.',
        icon: <LightbulbIcon fontSize="large"  style={{color:'#2d6a4f'}}/>,
    },
    {
        title: 'Quality',
        description: 'Quality is our top priority. We maintain rigorous standards for taste, nutrition, and hygiene, ensuring that every dish we serve meets our high expectations.',
        icon: <VerifiedIcon fontSize="large" style={{color:'#2d6a4f'}} />,
    },
    {
        title: 'Sustainability',
        description: 'We are committed to sustainable practices that minimize our environmental footprint. From responsibly sourced ingredients to eco-friendly packaging, we make choices that benefit both our customers and the planet.',
        icon: <RecyclingOutlinedIcon  fontSize="large"  style={{color:'#2d6a4f'}}/>,
      },
    {
        title: 'Employee Well-being',
        description: 'Our employees are our greatest asset. We foster a positive and inclusive work culture, support professional development, and promote a healthy work-life balance to ensure our team members thrive.',
        icon: <BadgeIcon fontSize="large"  style={{color:'#2d6a4f'}}/>,
    },
    {
     title:'Community Engagement',
     description:'We believe in giving back to the communities we serve. By participating in local initiatives, supporting charitable causes, and fostering community relationships, we aim to make a positive impact beyond our business.',
     icon:<PeopleIcon fontSize="large" style={{color:'#2d6a4f'}}/>,
    },
    ];

    return (
        <>
       
    <div className='abouthead'>

   
        <Container sx={{ paddingY: 4 }}>
            {/* About Section */}
           
            <Section >
                <Typography style={{fontSize:'36px',color:'white'}} gutterBottom>About Pioxno</Typography>
                <Typography style={{fontSize:'14px',color:'white'}} >
                    Pioxno is a premier foodtech startup that operates a diverse range of multibrand outlets, providing an extensive selection of cuisines to our valued customers. Our flagship brands include Italian, Indian, and high-protein foods, available on leading delivery platforms like Zomato and Swiggy. At Pioxno, we are committed to delivering top-notch food and exceptional service, redefining the dining experience for our customers.
                </Typography>
            </Section>
</Container>
</div>
<Container sx={{ paddingY: 4 }}>
            {/* Mission Section */}
            <Section>
                <Typography variant="h4" component="h2" gutterBottom  style={{ color:'#2d6a4f', fontWeight:'600', fontFamily:'serif'}}> <TrackChangesIcon style={{fontSize:'large'}}/> Mission  </Typography>
                <Typography variant="body1" style={{fontSize:'13px'}} >
                    Our mission at Pioxno is to revolutionize the food industry by delivering an unparalleled dining experience that caters to diverse tastes and dietary preferences. We are dedicated to becoming the go-to brand for delicious, healthy, and convenient meals, earning the trust and loyalty of our customers through consistent quality and innovation.
                </Typography>
            </Section>

            {/* Vision Section */}
            <Section>
                <Typography variant="h4" component="h2" gutterBottom style={{ color:'#2d6a4f', fontWeight:'600', fontFamily:'serif'}}> <VisibilityIcon style={{fontSize:'large'}}/> Vision</Typography>
                <Typography variant="body1" style={{fontSize:'13px'}} >
                    We envision Pioxno as a market leader in the foodtech industry, renowned for our commitment to excellence, innovation, and customer satisfaction. By continually expanding our brand portfolio and embracing cutting-edge technologies, we aim to set new benchmarks in the industry and shape the future of dining.
                </Typography>
            </Section>

            {/* Core Values Section */}
            <Section>
                <Typography variant="h4" component="h2" gutterBottom style={{ color:'#2d6a4f', fontWeight:'600', fontFamily:'serif'}}> <DiamondIcon style={{fontSize:'large'}}/> Core Values</Typography>
                <Grid container spacing={2}>
                    {coreValues.map((value, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <CoreValueItem elevation={1}>
                            {value.icon}
                                <Typography variant="h6" gutterBottom>{value.title}</Typography>
                                <Typography variant="body2" style={{fontSize:'11px'}} >{value.description}</Typography>
                            </CoreValueItem>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* Strategic Goals Section */}
            </Container>
            <Section>
                <Typography id='bannerabout' variant="h4" component="h2" gutterBottom> Strategic Goals</Typography>
                <Container sx={{ paddingY: 4 }}>
                      <Grid container spacing={2}>
                    {goals.map((value, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <CoreValueItem elevation={1}>
                            {value.icon}
                                <Typography variant="h6" gutterBottom>{value.title}</Typography>
                                <Typography variant="body2" style={{fontSize:'11px'}} >{value.description}</Typography>
                            </CoreValueItem>
                        </Grid>
                    ))}
                </Grid>
                </Container>
            </Section>
            <Container sx={{ paddingY: 4 }}>

            {/* Why Join Section */}
            <Section>
                <Typography variant="h4" component="h3" gutterBottom style={{ color:'#2d6a4f', fontWeight:'700', fontFamily:'serif'}}>Why Join Pioxno?</Typography>
                <Typography variant="body1" style={{fontSize:'14px'}}>
                    Joining Pioxno means becoming part of a dynamic, forward-thinking team that is passionate about transforming the food industry. We offer a collaborative and supportive environment where creativity and innovation are encouraged. At Pioxno, you will have the opportunity to work on exciting projects, gain invaluable experience, and grow your career with a company that values your contributions.
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }} style={{fontSize:'14px'}}>
                    Whether you are a customer seeking a memorable dining experience or a professional looking for a rewarding career, Pioxno is the place for you. Join us on our journey to redefine the food industry and create lasting impacts for our customers and communities!
                </Typography>
            </Section>
            </Container>
        </>
    );
};

export default About;

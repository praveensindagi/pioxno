import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const CookiesPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 20, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pioxno Cookies Policy
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" gutterBottom>
          At Pioxno, we use cookies to enhance your experience on our website. This Cookies Policy explains what cookies are, how we use them, the choices you have regarding cookies, and further information about them.
        </Typography>

        <Typography variant="h6" gutterBottom>
          What Are Cookies?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They allow the website to recognize your device and remember your preferences or actions over time.
        </Typography>

        <Typography variant="h6" gutterBottom>
          How We Use Cookies
        </Typography>
        <Typography variant="body1" gutterBottom>
          Pioxno uses cookies for the following purposes:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="To provide essential website functionality and improve user experience." />
          </ListItem>
          <ListItem>
            <ListItemText primary="To analyze website traffic and optimize our services." />
          </ListItem>
          <ListItem>
            <ListItemText primary="To personalize content and offers based on your preferences." />
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>
          Types of Cookies We Use
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Essential Cookies"
              secondary="These cookies are necessary for the website to function properly. Without these cookies, certain services you have asked for cannot be provided."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Performance and Analytics Cookies"
              secondary="These cookies allow us to analyze how users interact with our site so we can improve it. They do not collect personal data."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Functionality Cookies"
              secondary="These cookies remember your choices and preferences to provide a more personalized experience."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Targeting/Advertising Cookies"
              secondary="These cookies track your browsing habits to deliver more relevant advertising or limit the number of times you see an ad."
            />
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>
          Managing Cookies
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and configure settings for certain websites. However, please note that disabling cookies may affect the functionality of our website.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Early Access and Mobile App Launch
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please be aware that during this early access phase, Pioxno points you earn will be redeemable once our mobile app is officially launched. The cookies used for tracking your points will remain active during this phase.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Updates to This Cookies Policy
        </Typography>
        <Typography variant="body1" gutterBottom>
          We may update our Cookies Policy from time to time. When we do, we will notify you of any significant changes by posting the new policy on this page.
        </Typography>

        <Typography variant="body2" sx={{ mt: 4 }}>
          If you have any questions or concerns about our Cookies Policy, please contact us at info@pioxno.com.
        </Typography>
      </Box>
    </Container>
  );
};

export default CookiesPolicy;

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
    return (
        <Container 
            maxWidth="sm" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh', 
                textAlign: 'center'
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <ErrorOutlineIcon sx={{ fontSize: 100, color: 'red' }} />
            </Box>
            <Typography variant="h3" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                Sorry, the page you're looking for doesn't exist.
            </Typography>
            <Button 
                id="JoinNow"
                color="primary" 
                sx={{ mt: 3 }} 
                onClick={() => window.location.href = '/'}
            >
                Go Back Home
            </Button>
        </Container>
    );
};

export default NotFound;

import React, { useState, useEffect } from 'react';
import { setCookie, getCookie, removeCookie } from './cookieUtils';
import { Button, TextField, Typography, Box } from '@mui/material';

const CookiesComponent = () => {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  useEffect(() => {
    // Check if a cookie exists for the user's name
    const cookieName = getCookie('pioxnoName');
    if (cookieName) {
      setStoredName(cookieName);
    }
  }, []);

  const handleSaveName = () => {
    setCookie('pioxnoName', name, 7); // Store the name in a cookie for 7 days
    setStoredName(name); // Update the state with the new name
  };

  const handleRemoveName = () => {
    removeCookie('pioxnoName'); // Remove the cookie
    setStoredName(''); // Clear the stored name from state
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Pioxno Cookies Example
      </Typography>

      {storedName ? (
        <>
          <Typography variant="h6" sx={{mt:30}}>Welcome back, {storedName}!</Typography>
          <Button variant="contained" color="secondary" onClick={handleRemoveName} sx={{ mt: 2 }}>
            Remove Name
          </Button>
        </>
      ) : (
        <Box sx={{ mt: 20 }}>
          <TextField
            label="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleSaveName}>
            Save Name
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CookiesComponent;

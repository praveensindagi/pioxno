import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Checkbox, FormControlLabel,  useMediaQuery, useTheme ,Grid, TextField, Typography, Link , Container, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Star } from '@mui/icons-material';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  termsAccepted: false,
};

export const JoinNow= (props) => {
  const [open, setOpen] = useState(false);
 
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md')); // Adjusts dialog to full screen on small devices
 
  const handleSubmit1 = () => {
    // Simulate a successful submission
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const clearState = () => setFormState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, password, confirmPassword, termsAccepted } = formState;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!termsAccepted) {
      alert("You must accept the terms and conditions!");
      return;
    }

    console.log(firstName, lastName, email, phone, password, confirmPassword);

    emailjs
      .sendForm("service_6pdhljq", "template_or1basc", e.target, "Q-WUw-VvLz0CeTkpm")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
   
   <Container sx={{marginTop:'100px', padding:'20px'}}>


     <Grid container>


    
       <Grid item xs={12} md={6} > 
      <Container>

     
        
              <div className="section-title">
         

               
                <h2>Join Pioxno Reward Program</h2>
                <p>Please fill out the form below to join.</p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField 
                      label="First Name"
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                      value={formState.firstName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="formbox"
                      label="Last Name"
                      name="lastName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                      value={formState.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="formbox"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                      value={formState.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="formbox"
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                      value={formState.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="formbox"
                      label="Password"
                      name="password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                      value={formState.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="formbox"
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                      value={formState.confirmPassword}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="termsAccepted"
                          color="primary"
                          onChange={handleChange}
                          checked={formState.termsAccepted}
                        />
                      }
                      label={
                        <Typography>
                          I agree to the{" "}
                          <Link href="your-terms-and-conditions-url" target="_blank" rel="noopener noreferrer">
                            Terms and Conditions
                          </Link>
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary"  onClick={handleSubmit1} id="jobapplybuttonfinal" fullWidth>
                      Join Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
              </Container>
              </Grid>

              <Grid item xs={12} md={6} sx={{marginBottom:'30px',marginTop:'60px'}}> 
          <Container maxWidth="md" sx={{ height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <Box textAlign="center" mb={2}>
            <Typography variant="h3" gutterBottom>
           Pioxno Reward Program!
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Welcome to the Pioxno Rewards Program! As part of our exclusive early access, you’re among the first to experience our loyalty program designed to reward you for every purchase.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box textAlign="center" id='htr'>
            <Typography variant="h5"  gutterBottom>
              Step 1: Earn Pioxno Points <StarPurple500Icon/>
            </Typography>
            <Typography variant="body1" sx={{fontSize:'12px'}}>
              With every purchase you make, you’ll accumulate Pioxno Points, adding value to your shopping experience.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box textAlign="center"  id='htr'>
            <Typography variant="h5" gutterBottom>
              Step 2: Redeem Your Rewards <LoyaltyIcon/>
            </Typography>
            <Typography variant="body1" sx={{fontSize:'12px'}}> 
              Once our mobile application is available, you'll be able to redeem your Pioxno Points through the app. Use your points to purchase exclusive merchandise directly from the Pioxno Rewards Store.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography variant="h6" color="textSecondary" sx={{fontSize:'14px'}}>
              This early access to our rewards program gives you a head start in collecting points, ensuring you're ready to enjoy all the benefits as soon as our app launches. Stay tuned for more updates!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          style: {
            background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          },
        }}
      >
        {/* Star Icons in Background */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 1 }}>
          {[...Array(15)].map((_, i) => (
            <Star key={i} sx={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 50 + 10}px`,
              color: 'rgba(255, 255, 255, 0.3)',
              animation: 'float 5s ease-in-out infinite',
            }} />
          ))}
        </Box>

        <Box sx={{ zIndex: 2, p: 3 }}>
          <DialogTitle id="responsive-dialog-title" sx={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            Joining Successful
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ textAlign: 'center', fontSize: '1.2rem' }}>
              Thank you for joining the Pioxno Rewards Program! You're all set to start earning and redeeming your points once our app is live.
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleClose} sx={{ color: 'white', borderColor: 'white' }} variant="outlined">
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Container>
    
    </Grid>
    </Grid>
    </Container>
      
   
      </>
  );
};

import React from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
const Footer =() => {
    return (
        
         <>
      
          
         <div className="footercontent">
         <Container  className='FooterContainer'>
            <Grid container rowSpacing={2}>
                <Grid item  xs={12} md={6}>
                    <h5> Pioxno.</h5>
                     <h6 id="footerb" >Pioxno specializes in premium Italian, Indian, and high-protein cuisine, catering to diverse customer preferences through efficient delivery on Zomato and Swiggy. Quality and variety are our hallmarks.</h6>
                    
                </Grid>
                <Grid item  xs={6} md={2}>
                    <h5> Company</h5>
                    <h6> <a href="/BlogPage"> Blogs </a></h6>
                    <h6> Career</h6>
                 
                </Grid>
                <Grid item  xs={6} md={2}>
                    <h5> Resource</h5>
                    <h6>Press Confresence</h6>
                 
                    <h6>Documenation</h6>
                </Grid>
                <Grid item  xs={6} md={2}>
                <h5> Get the app</h5>
                 <p>
                 <Button id='app' startIcon={<AppleIcon/>} variant='outlined' fullWidth>
                        IOS
                    </Button> <br />
                    <Button  id='app' startIcon={<AndroidIcon/>}variant='outlined' fullWidth>
                        Android
                    </Button>
                 </p>
                </Grid>
            </Grid>
            </Container>
         </div>
       
         <div className="footerPioxnollp" >
         <Container  className='footerContainer' >
            <Grid container rowSpacing={2} >
                <Grid item  xs={12} md={6} br>
                    <h6>2024 Pioxno. All rights Reserved</h6>
                   
                </Grid>
                <Grid item sm xs={4} md>
                    <h6> Privacy & Policy</h6>
                   
                </Grid>
                <Grid item   xs={4} md>
                    <h6> Terms & Conditions</h6>
                   
                </Grid>
                <Grid item  xs={4} md>
                    <h6> Cookies</h6>
                  
                </Grid>
            </Grid>
            </Container>
         </div>
         
    </>
       
    )
};

export default Footer;

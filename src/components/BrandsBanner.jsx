import React from "react";
import {Grid, Container, Typography} from '@mui/material';


export const Features = (props) => {
  return (
  
   <> 
        <Grid container  justifyContent="center"
  alignItems="center" rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} md={3}>
    <Container id="brands" className="Tasteofpioxno" sx={{textAlign:'center'}}>  
      <Typography style={{fontSize:'20px',fontFamily:"cursive", fontWeight:'400'}}> Taste Of Pioxno</Typography>
    </Container>
  </Grid>
  <Grid item xs={6}  md={3}>
<Container id="brands" className="Pohawala"sx={{textAlign:'center'}}> 
<Typography variant="h6" style={{fontSize:'20px',fontFamily:"Times New Roman ", fontWeight:'500'}}>Pohawala by Pioxno</Typography>
</Container>
  </Grid>
  <Grid item xs={6}  md={3}>
 <Container id="brands" className="PioxnoBarista" sx={{textAlign:'center'}}>
 <Typography variant="" style={{fontSize:'20px'}}> Pioxno Barista</Typography> </Container>
  </Grid>
  <Grid item xs={6}  md={3}>
<Container id="brands" className="Greenfoods" sx={{textAlign:'center'}}>
<Typography variant="h6"  style={{fontSize:'30px',fontFamily:"Brush Script MT", fontWeight:'500'}}>GreenFoods by Pioxno</Typography> </Container>
  </Grid>
</Grid>


</>
 
  );
};

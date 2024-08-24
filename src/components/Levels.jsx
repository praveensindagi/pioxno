import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Button } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Levels() {
  

  return (
    <div className='sub'>
   
    <Grid container  id="subcontainer" sx={{ flexGrow: 1 }} spacing={{ xs: 1, sm: 2, md: 2 }}>
      <Grid  item xs={12} sm={4} md={4}  spacing={4}>
      <Item className='Platinum'>
       <h1 id='head'> <StarBorderIcon/> Welcome <StarBorderIcon/> </h1>
      
       
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Welcome Gift: Commplimentry dessert on the first order after joining.</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Points Accumulation: Earn 5% point for every  100 spent.</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Birthday Reward: Free dessert on the member’s birthday.</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Exclusive Offers: Access to special promotions and member-only discounts.</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Early Access: Priority ordering for limited-time offers or new menu items.</h4>
<h4><Button href='/Contact' Id='Button' variant="contained" size="large" >Join Now</Button> </h4>

      </Item>
      </Grid>
      <Grid item  sm={4} xs={12} md={4}>
      <Item className='Diamond  '>
      <span id='head' className='thead'><StarBorderIcon/> Green <StarBorderIcon/> </span>
      
       
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i>All Welcome Tier Benefits
</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Increased Points Earn Rate: Earn 10% points for every 100 spent.
</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Order Discount: 10% Cashback on every purchase</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Birthday Reward: Free meal on the member’s birthday.
</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Complimentary dessert on the member’s anniversary.</h4>
<h4><i class="fa fa-check-circle-o" aria-hidden="true"></i> Exclusive Access: Early access to special menus and members-only promotions.</h4>
<h4><Button Id='ButtonGreen' variant="contained" disabled size="large" >Upgrade</Button> </h4>
      </Item>
      </Grid>
      <Grid  item  sm={4} xs={12} md={4}>
      <Item className='VIP'>
      <h1 id='head' className='Gold'><StarBorderIcon/> Gold <StarBorderIcon/> </h1>
      
<h4  className='Gold'><i class="fa fa-check-circle-o" aria-hidden="true"></i>  All Green Tier Benefits</h4>
      
<h4  className='Gold'><i class="fa fa-check-circle-o" aria-hidden="true"></i> Enhanced Points Earn Rate: Earn 2 points for every $1 spent.</h4>
<h4  className='Gold'><i class="fa fa-check-circle-o" aria-hidden="true"></i> 15% Cashback on every purchase.</h4>
<h4  className='Gold'><i class="fa fa-check-circle-o" aria-hidden="true"></i> Personalized menu recommendations and priority customer support.</h4>
<h4  className='Gold'><i class="fa fa-check-circle-o" aria-hidden="true"></i> Birthday Reward: Complimentary meal </h4>
 
<h4  className='Gold'><i class="fa fa-check-circle-o" aria-hidden="true"></i> Occasional unexpected perks, such as free delivery or complimentary items.</h4>
<h4><Button  Id='ButtonPro' variant="contained"disabled size="large"  >Upgrade</Button> </h4>
      </Item>
      </Grid>
    </Grid>


    </div>
    
  );
}
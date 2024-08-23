// src/components/JobCard.js

import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

const JobCard = ({ title, role, location, experience, level, jobType }) => {
  return (
    <Card id='jobcard' sx={{ marginBottom: 2 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}  >
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{color:'#2d6a4f'}}>
              {role}
            </Typography>
            <p  id='jobele'variant="h6">
            <TimelineOutlinedIcon/> {level}<br />
              <WorkOutlineOutlinedIcon/> {experience}
            
             
              <br />
              <LocationOnOutlinedIcon /> {location}
              <br />
             <AccessTimeOutlinedIcon/> {jobType}
            </p>
          
          </Grid>
          <Grid item xs={12} sm={12}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button  id='jobapplybutton' variant="outlined" fullWidth><a href="JobApplicationPage">
          Apply Now </a>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;

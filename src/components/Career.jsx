import React , { useState, useMemo  }  from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CardActions, Box } from '@mui/material';
import JobCard from './JobCard';
import JobFilter from './JobFilter';
import CultureSection from './CultureSection';
import HiringStepsBanner from'./HiringStepsBanner';

const initialJobs = [
    { title: 'Software Engineer', role: 'Development', location: 'San Francisco, CA', experience: '2-4 years', level: 'Mid', jobType: 'Full-time' },
    { title: 'Product Manager', role: 'Management', location: 'New York, NY', experience: '5-7 years', level: 'Senior', jobType: 'Part-time' },
    { title: 'UX Designer', role: 'Design', location: 'Austin, TX', experience: '3-5 years', level: 'Mid', jobType: 'Contract' },
    { title: 'Product Manager', role: 'Management', location: 'New York, NY', experience: '5-7 years', level: 'Senior', jobType: 'Part-time' },
    { title: 'UX Designer', role: 'Design', location: 'Austin, TX', experience: '3-5 years', level: 'Mid', jobType: 'Contract' },
    // Add more job objects here
  ];
  
const Career = () => {
    const [jobs, setJobs] = useState(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);

  // Calculate unique job types and levels
  const jobTypes = useMemo(() => Array.from(new Set(jobs.map(job => job.jobType))), [jobs]);
  const levels = useMemo(() => Array.from(new Set(jobs.map(job => job.level))), [jobs]);

  const handleFilter = (filters) => {
    const { title, jobType, level } = filters;
    const filtered = jobs.filter((job) => {
      return (
        (title ? job.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (jobType ? job.jobType.toLowerCase() === jobType.toLowerCase() : true) &&
        (level ? job.level.toLowerCase() === level.toLowerCase() : true)
      );
    });
    setFilteredJobs(filtered);
  };

    return (
  
        <>
        <div className="careerPage">
        <div className="careerBanner">
                <div className="bannerHead">
                    <Container maxWidth="md">

                 
                    <Typography sx={{ textAlign: 'center',m:1}} className='careertagline' variant='h3'>Join our world-class team of passionate professionals.</Typography>
                    </Container>
                </div>
                </div>
                <div>
                <div className="cultureatpioxno">
                  <CultureSection/>
                </div>
              
                <Container>
                <Typography id='jobsearchTitle'variant='h4' sx={{ textAlign: 'start',m:1}}> Let's match you with your perfect career fit
                </Typography>
      <JobFilter onFilter={handleFilter} jobTypes={jobTypes} levels={levels} />
      <Grid container spacing={2}>
        {filteredJobs.map((job, index) => (
          <Grid item xs={12} md={4} key={index}>
            <JobCard {...job} />
          </Grid>
        ))}
      </Grid>
    </Container>
                </div>
              

            
        </div>
        <HiringStepsBanner/>
        </>
    
    );
};

export default Career;

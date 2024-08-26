import React , { useState, useMemo  }  from 'react';
import { Container, Grid, Typography } from '@mui/material';
import JobCard from './JobCard';
import JobFilter from './JobFilter.jsx';
import CultureSection from './CultureSection.jsx';
import HiringStepsBanner from'./HiringStepsBanner.jsx';

const initialJobs = [
    { title: 'Software Developer Intern', role: 'Development', location: 'Bengaluru(Remote)', experience: '0 years', level: 'fresher', jobType: 'Internship' },
  
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

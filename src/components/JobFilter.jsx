// src/components/JobFilter.js

import React, { useState, useCallback } from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';
import debounce from 'lodash.debounce';

const JobFilter = ({ onFilter, jobTypes, levels }) => {
  const [title, setTitle] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const debouncedFilter = useCallback(
    debounce((filters) => {
      onFilter(filters);
    }, 300),
    [onFilter]
  );

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    debouncedFilter({ title: newTitle, jobType: selectedJobType, level: selectedLevel });
  };

  const handleJobTypeChange = (event) => {
    const newJobType = event.target.value;
    setSelectedJobType(newJobType);
    debouncedFilter({ title, jobType: newJobType, level: selectedLevel });
  };

  const handleLevelChange = (event) => {
    const newLevel = event.target.value;
    setSelectedLevel(newLevel);
    debouncedFilter({ title, jobType: selectedJobType, level: newLevel });
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
      <Grid item xs={12} sm={4}>
        <TextField sx={{fontSize:'18px'}}
          label="Job Title"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          select
          label="Job Type"
          value={selectedJobType}
          onChange={handleJobTypeChange}
          fullWidth
        >
          <MenuItem value="">All</MenuItem>
          {jobTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          select
          label="Level"
          value={selectedLevel}
          onChange={handleLevelChange}
          fullWidth
        >
          <MenuItem value="">All</MenuItem>
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="outlined" sx={{
              height: '46px', // Adjust height to match TextField
              flexShrink: 0,
              ml: 1
            }} onClick={() => debouncedFilter({ title, jobType: selectedJobType, level: selectedLevel })} fullWidth >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default JobFilter;

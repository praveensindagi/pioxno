import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
  } from 'react-share';

const BlogCard = ({ title, description }) => {
    const shareUrl = 'https://www.pioxno.com/BlogPage/';
  return (
    <>
    
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{fontSize:'14px'}}  color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'end', gap: '10px',padding:'10px' }}>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title} summary={title} source="Pioxno">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </Card>
    </>
  );
};

export default BlogCard;

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Video from './video.mp4';

const VideoContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 4rem;
    text-align: center;
    z-index: 1;
  }
`;

const VideoBackground = () => {
  return (
    <VideoContainer>
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <Typography variant="h1">Your Text Here</Typography>
      </div>
    </VideoContainer>
  );
};

export default VideoBackground;


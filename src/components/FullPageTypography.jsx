import React from 'react';

const FullPageTypography = () => {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000', // Black background
    color: '#fff', // White text color
    margin: 0,
  };

  const textStyle = {
    fontFamily: 'Italiana, sans-serif',
    fontWeight: 400,
    fontSize: '400px', // Adjust font size as needed
    textAlign: 'center',
  };

  return (
    <div style={pageStyle}>
      <div style={textStyle}>
      X
      </div>
    </div>
  );
};

export default FullPageTypography;

import React from 'react';
import { Paper, Typography } from '@mui/material';

function Footer() {
  const containerStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontFamily:  "sans-serif",
    padding: '1.5rem',
    backgroundColor: '#6352bb', 
    color: '#fff', 
  };

  const textStyle = {
    color: 'orange', // Change to your desired text color
  };
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Paper style={containerStyle}>
      <footer>
       Developed by <span style={textStyle}>Vibhav Tripathi</span>. Copyright <span style={textStyle}> © {year} VT</span>
      </footer>
    </Paper>
  );
}

export default Footer;

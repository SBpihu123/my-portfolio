import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function About() {
  return (
    <Box
      id="about"
      sx={{
        padding: '60px 20px',
        backgroundColor: '#f4f6f8',
        borderBottom: '5px solid #00cec9',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: '2.3rem',
          fontWeight: 'bold',
          color: '#2c3e50',
          mb: 3,
          borderLeft: '6px solid #00cec9',
          paddingLeft: '15px',
        }}
      >
        Profile
      </Typography>
      <Paper
        sx={{
          backgroundColor: '#ffffff',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
          maxWidth: '800px',
          margin: 'auto',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: '#34495e',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}
        >
          I am a motivated Full-Stack Engineer with a strong foundation in both frontend and backend technologies.
          I thrive in solving real-world problems and believe in collaboration and continuous learning to grow as a developer.
        </Typography>
      </Paper>
    </Box>
  );
}

export default About;

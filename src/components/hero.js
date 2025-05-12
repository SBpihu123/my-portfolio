import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import myPhoto from '../assets/profile/passphoto_sujata.jpeg';

function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #0984e3, #6c5ce7)',
        color: '#fff',
        padding: '200px 20px', 
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: '3.5rem',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Added text shadow
            }}
          >
            Hi, I'm Sujata Behera
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: '#dfe6e9',
              mb: 3,
              fontStyle: 'italic',
            }}
          >
            Full Stack Web Developer | Problem Solver | Lifelong Learner
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Chennai, 600042, India
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Email: sujatabehera690@gmail.com | Phone: +91 9040403917
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#00cec9',
              borderColor: '#00cec9',
              textTransform: 'none',
              fontWeight: 'bold',
              mb: 3,
              '&:hover': {
                borderColor: '#0984e3',
                color: '#0984e3',
                transform: 'scale(1.1)', // Hover effect (scale)
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Box shadow on hover
              },
            }}
            href="https://www.linkedin.com/in/sujata-behera-0964aa196/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={6}
            sx={{
              width: 250,
              height: 250,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'transform 0.3s ease', // Animation for scaling
              '&:hover': {
                transform: 'scale(1.1)', // Hover effect (scale image)
              },
            }}
          >
            <img
              src={myPhoto}
              alt="Sujata Behera"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// Remove the Box import since it's not used
// import Box from '@mui/material/Box';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2d3436', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#00cec9', fontWeight: 600 }}>
          Sujata Behera
        </Typography>
        <Stack direction="row" spacing={4}>
          {/* Navigation Buttons */}
          <Button
            color="inherit"
            href="#about"
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            href="#education"
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            Education
          </Button>
          <Button
            color="inherit"
            href="#skills"
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            Skills
          </Button>
          <Button
            color="inherit"
            href="#projects"
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            href="#experience"
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            Experience
          </Button>
          <Button
            color="inherit"
            href="#certifications"
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            Certifications
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            Contact
          </Button>

          {/* Resume Button */}
          <Button
            color="inherit"
            
    href="https://github.com/SBpihu123/my-resume/raw/master/Sujata_Behera_Resume.pdf" 
 // Change this to your actual resume PDF link
            target="_blank" // To open in a new tab
            sx={{
              '&:hover': {
                backgroundColor: '#0984e3',
                color: '#fff',
                borderRadius: '5px',
              },
            }}
          >
            Resume
          </Button>

          
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

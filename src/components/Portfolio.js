import React from 'react';
import Navbar from './navbar'; // Assuming Navbar is already created
import Projects from './Projects'; // Assuming Projects section is created
import Resume from './Resume'; // New Resume component

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Sujata Behera - Full Stack Web Developer
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', color: '#555', fontSize: '1.1rem' }}>
          Welcome to my portfolio. Here you will find details about my skills, projects, and professional experience.
        </Typography>
      </Box>

      <Projects />   {/* Projects section */}
      <Resume />     {/* Resume section */}
    </div>
  );
}

export default Portfolio;

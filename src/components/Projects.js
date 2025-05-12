import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

function Projects() {
  const projectList = [
    {
      title: "Text-to-Speech Web App",
      description: "A web app that converts text input into speech using JavaScript and Web Speech API. The app features real-time text-to-speech conversion with support for multiple languages.",
      tech: "JavaScript, HTML5, CSS3"
    },
    {
      title: "Accommodation Booking Platform",
      description: "An online platform to book satsang accommodation with an integrated admin panel. Allows users to book rooms, and admins to manage availability, reservations, and payments.",
      tech: "Angular, Node.js, MySQL"
    },
    {
      title: "RESTful API with Flask",
      description: "Built and tested REST APIs using Flask and Postman for internal tools. The API supports CRUD operations and provides authentication and authorization features.",
      tech: "Flask, Python, Postman"
    }
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              elevation={5} 
              sx={{ 
                height: '100%', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph sx={{ fontSize: '1rem' }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                  <strong>Technologies:</strong> {project.tech}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;

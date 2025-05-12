import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

function Experience() {
  return (
    <Box
      id="experience"
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
        Experience
      </Typography>

      {/* DAS Solutions */}
      <Paper
        sx={{
          backgroundColor: '#ffffff',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
          marginBottom: '30px',
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#0984e3' }}>
          Full Stack Developer, DAS Solutions (Aug 2023 – Present)
        </Typography>
        <List sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 15 }}>
          <ListItem>
            <ListItemText
              primary="Developed Text-to-Speech app, and online booking system for Satsang"
              sx={{ fontSize: '1.1rem', color: '#34495e' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Improved performance through optimized DB and API handling"
              sx={{ fontSize: '1.1rem', color: '#34495e' }}
            />
          </ListItem>
        </List>
      </Paper>

      {/* Satsang IT Wing */}
      <Paper
        sx={{
          backgroundColor: '#ffffff',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#0984e3' }}>
          Freelancer, Satsang IT Wing (Jul 2022 – Aug 2023)
        </Typography>
        <List sx={{ listStyle: 'none', paddingLeft: 0, marginTop: 15 }}>
          <ListItem>
            <ListItemText
              primary="Built server scripts, REST APIs, and reduced manual operations"
              sx={{ fontSize: '1.1rem', color: '#34495e' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Used Postman for testing, collaborated cross-functionally"
              sx={{ fontSize: '1.1rem', color: '#34495e' }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default Experience;

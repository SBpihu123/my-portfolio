import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

function Education() {
  return (
    <Box
      id="education"
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
        Education
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
        <List sx={{ listStyle: 'none', paddingLeft: 0 }}>
          <ListItem>
            <ListItemText
              primary={<strong>B.Tech in CSE</strong>}
              secondary="RITE, Odisha (2019–2022) – CGPA: 8.5"
              sx={{ fontSize: '1.2rem', color: '#34495e' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<strong>Diploma in CSE</strong>}
              secondary="SVSET, Odisha (2016–2019) – CGPA: 9.5"
              sx={{ fontSize: '1.2rem', color: '#34495e' }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default Education;

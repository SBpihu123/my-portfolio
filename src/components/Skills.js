import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid, Paper } from '@mui/material';

function Skills() {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f7f7f7', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: '#2d3436' }}>
        Skills
      </Typography>
      <Grid container spacing={4}>
        {/* Frontend */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0984e3', mb: 2 }}>
              Frontend
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Angular, RxJS, NgRx, HTML5, CSS3, JS (ES6+), TypeScript" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Backend */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0984e3', mb: 2 }}>
              Backend
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Node.js, Express.js, Flask, REST APIs, JWT" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Languages */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0984e3', mb: 2 }}>
              Languages
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Python, JS, TS, SQL, Core Java" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Database */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0984e3', mb: 2 }}>
              Database
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="MySQL, MongoDB, Firebase" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* DevOps/Tools */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0984e3', mb: 2 }}>
              DevOps/Tools
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Azure, Docker, Git, GitHub, Postman, VS Code" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;

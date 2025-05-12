import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

function Resume() {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f7f7f7', borderRadius: '8px', marginTop: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        My Resume
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', textAlign: 'center', color: '#555' }}>
        Here is a summary of my professional experience, skills, and educational background. You can download my resume by clicking the button below.
      </Typography>
      <Grid container justifyContent="center">
        <Button 
          variant="contained" 
          color="primary" 
          href="https://drive.google.com/uc?export=download&id=1XDpoxs9jDCutdSOS3T1Tok6dpTlMr5oh" // Corrected direct download link
          download="Sujata_Behera_Resume.pdf" 
          startIcon={<DownloadIcon />}
          sx={{
            fontSize: '1rem', 
            fontWeight: 'bold', 
            padding: '10px 20px', 
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#74b9ff'
            }
          }}
        >
          Download Resume
        </Button>
      </Grid>
    </Box>
  );
}

export default Resume;

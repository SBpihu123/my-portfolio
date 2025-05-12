import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      id="contact"
      sx={{
        marginTop: '50px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#2c3e50', mb: 1 }}>
        Contact: sujatabehera690@gmail.com | +91 9040403917
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: '#2c3e50' }}>
        <Link
          href="https://www.linkedin.com/in/sujata-behera-0964aa196/"
          target="_blank"
          rel="noreferrer"
          sx={{
            textDecoration: 'none',
            color: '#0984e3',
            fontWeight: 'bold',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;

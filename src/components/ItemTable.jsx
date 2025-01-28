import { Box, Typography } from '@mui/material';
import React from 'react';

const ItemTableList = () => {
  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        padding: '16px',
        marginTop: '16px', // Add some spacing from the form
        minHeight: '200px', // Set a minimum height for the box
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" color="textSecondary">
        No items added yet.
      </Typography>
    </Box>
  );
};

export default ItemTableList;
import { Box, Typography } from '@mui/material';

const ItemTableList = () => {
  return (
    <Box
    sx={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      padding: '16px',
      marginTop: '16px',
      minHeight: '200px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      maxWidth: '1200px', 
    }}
  >
    <Typography variant="body1" color="textSecondary">
      No items added yet.
    </Typography>
  </Box>
  );
};

export default ItemTableList;
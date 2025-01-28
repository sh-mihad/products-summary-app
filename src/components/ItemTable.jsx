import { Autocomplete, Box, Button, Container, TextField } from '@mui/material';
import { useState } from 'react';

const ItemForm = () => {
  const [item, setItem] = useState(null); // Autocomplete uses null for no selection
  const [qty, setQty] = useState(0);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);

  // Sample items for the Autocomplete
 const items = [
  { id: 1, itemName: "item-1",label:"item-1", basePrice: "150" },
  { id: 2, itemName: "item-2",label:"item-2", basePrice: "200" },
  { id: 3, itemName: "item-3",label:"item-3", basePrice: "250" },
  { id: 4, itemName: "item-4",label:"item-4", basePrice: "300" },
  { id: 5, itemName: "item-5",label:"item-5", basePrice: "350" },
];

  const handleItemChange = (event, newValue) => {
    console.log(newValue);
    setRate()
    setItem(newValue);
  };

  const handleQtyChange = (event) => {
    const newQty = event.target.value;
    setQty(newQty);
    setAmount(newQty * rate);
  };

  const handleRateChange = (event) => {
    const newRate = event.target.value;
    setRate(newRate);
    setAmount(qty * newRate);
  };

  const handleAdd = () => {
    // Handle the add action here
    console.log({ item, qty, rate, amount });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Center vertically as well (optional)
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        p={3}
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        {/* Autocomplete for Item Selection */}
        <Autocomplete
          value={item}
          onChange={handleItemChange}
          options={items}
          getOptionLabel={(option) => option.label}
          sx={{ minWidth: '250px' }} // Increased width for the dropdown
          renderInput={(params) => (
            <TextField
              {...params}
              label="Item"
              variant="outlined"
            />
          )}
        />

        {/* Qty Field */}
        <TextField
          label="Qty"
          type="number"
          value={qty}
          onChange={handleQtyChange}
          sx={{ minWidth: '100px' }}
        />

        {/* Rate Field */}
        <TextField
          label="Rate"
          type="number"
          value={rate}
          onChange={handleRateChange}
          sx={{ minWidth: '100px' }}
        />

        {/* Amount Field (Read-only) */}
        <TextField
          label="Amount"
          type="number"
          value={amount}
          InputProps={{
            readOnly: true,
          }}
          sx={{ minWidth: '120px' }}
        />

        {/* Add Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          sx={{ height: '56px' }} // Match the height of other fields
        >
          Add
        </Button>
      </Box>
    </Container>
  );
};

export default ItemForm;
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ADD_PRODUCT, ProductListContext } from '../context/productList/ProductListContext';
import { productList } from '../data';

const ItemForm = () => {
  const [item, setItem] = useState(null); // Autocomplete uses null for no selection
  const [qty, setQty] = useState(0);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const {productDispatch} = useContext(ProductListContext)


  const handleItemChange = (event, newValue) => {
    setItem(newValue);
    if(!newValue)return;
    setRate(newValue.basePrice)
    
  };

  const handleQtyChange = (event) => {
    const newQty = +event.target.value;
    setQty(newQty);
    setAmount(newQty * rate);
  };

  const handleRateChange = (event) => {
    const newRate = event.target.value;
    setRate(newRate);
    setAmount(qty * newRate);
  };

  const handleAdd = () => {
    productDispatch({type:ADD_PRODUCT,payload:{id:item.id,itemName:item.itemName,qty,rate,amount}})
    setAmount(0)
    setRate(0)
    setQty(0)
    setItem(null)
  };

  return (
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
      width: '100%', // Full width of the container
      maxWidth: '1200px', // Set a max-width for the form
    }}
  >
    {/* Autocomplete for Item Selection */}
    <Autocomplete
      value={item}
      onChange={handleItemChange}
      options={productList}
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

  );
};

export default ItemForm;
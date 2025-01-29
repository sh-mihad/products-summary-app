import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { ADD_PRODUCT, ProductListContext } from '../context/productList/ProductListContext';
import { productList } from '../data';

const ItemForm = () => {
  const [item, setItem] = useState(null); // Autocomplete uses null for no selection
  const [qty, setQty] = useState(0);
  const [rate, setRate] = useState(0);
  const { productDispatch } = useContext(ProductListContext)


  const handleItemChange = (event, newValue) => {
    setItem(newValue);
    if (!newValue) return;
    setRate(newValue.basePrice)
    setQty(1)

  };

  const handleQtyChange = (event) => {
    const newQty = +event.target.value;
    setQty(newQty);
  };

  const handleRateChange = (event) => {
    const newRate = event.target.value;
    setRate(newRate);
  };

  const handleAdd = () => {
    productDispatch({ type: ADD_PRODUCT, payload: { id: Math.floor(Math.random() * 100), itemName: item.itemName, qty, rate, amount:qty* rate} })
    setRate(0)
    setQty(0)
    setItem(null)
  };

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: '1200px',
        p: 3,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Autocomplete for Item Selection */}
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            value={item}
            onChange={handleItemChange}
            options={productList}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Item" variant="outlined" fullWidth />
            )}
          />
        </Grid>

        {/* Qty Field */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Qty"
            type="number"
            value={qty}
            onChange={handleQtyChange}
            fullWidth
          />
        </Grid>

        {/* Rate Field */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Rate"
            type="number"
            value={rate}
            onChange={handleRateChange}
            fullWidth
          />
        </Grid>

        {/* Amount Field (Read-only) */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Amount"
            type="number"
            value={qty* rate}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>

        {/* Add Button */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            fullWidth
            sx={{ height: '56px' }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>

  );
};

export default ItemForm;
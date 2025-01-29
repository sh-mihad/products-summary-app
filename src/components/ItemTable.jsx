import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useContext } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { ProductListContext, REMOVE_PRODUCT } from '../context/productList/ProductListContext';

const ItemTableList = () => {
  const { productState, productDispatch } = useContext(ProductListContext)
  console.log("productState",productState);
  const handleEdit=(id)=>{
    productDispatch({type:REMOVE_PRODUCT,payload:id})
  }
  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        padding: '16px',
        marginTop: '16px',
        minHeight: '400px',
        maxHeight: '400px', // Add a maxHeight to limit the box's height
        display: 'flex',
        flexDirection: 'column', // Ensure proper layout for scrollable content
        width: '100%',
        maxWidth: '1200px',
        overflow: 'hidden', // Prevents content from overflowing
      }}
    >
      {productState?.length < 1 ? (
        <Typography variant="body1" color="textSecondary">
          No items added yet.
        </Typography>
      ) : (
        <TableContainer
          sx={{
            maxHeight: '100%', // Allow TableContainer to take the remaining height
            overflowY: 'auto', // Enable vertical scrolling when content overflows
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productState.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.itemName}</TableCell>
                  <TableCell>{row.qty}</TableCell>
                  <TableCell>{row.rate}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                  <Button onClick={()=>handleEdit(row.id)}><AiOutlineDelete /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>

  );
};

export default ItemTableList;
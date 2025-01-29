import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useContext } from 'react';
import { ProductListContext } from '../context/productList/ProductListContext';
import transformProducts from '../utils/transformData';


export default function SummaryTable() {
     const {productState} = useContext(ProductListContext)
     const data = transformProducts(productState)
     console.log(data);
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        borderBottom: '1px solid #ccc',
        backgroundColor: '#fff',
        marginBottom: '16px', // Add some spacing below the section
      }}
    >
      {/* Summary Text */}
      <Typography variant="h6" component="div">
        Summary of 30 Jan 2025
      </Typography>

      {/* Download Button */}
      <Button variant="contained" color="primary">
        Download
      </Button>
    </Box>
    {
        data?.length>0 && <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="pricing table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "#90caf9", fontWeight: "bold" }}>Item Name</TableCell>
              {[...Array(5)].map((_, index) => (
                <TableCell key={index} sx={{ backgroundColor: "#90caf9", fontWeight: "bold" }}>
                  Price & Qty
                </TableCell>
              ))}
              <TableCell sx={{ backgroundColor: "#90caf9", fontWeight: "bold" }}>Total Qty</TableCell>
              <TableCell sx={{ backgroundColor: "#90caf9", fontWeight: "bold" }}>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.itemName}</TableCell>
                {row.variant?.map((entry, i) => (
                  <TableCell key={i}>{`${entry.rate}(${entry.qty})`}</TableCell>
                ))}
                <TableCell>{row.totalQty}</TableCell>
                <TableCell>{row.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    }
    </Box>
  )
}

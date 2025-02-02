import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useContext, useRef } from 'react';
import generatePDF from 'react-to-pdf';
import { ProductListContext } from '../context/productList/ProductListContext';
import formatMoney from '../utils/formatMony';
import getTodayDate from '../utils/getTodayDate';
import transformProducts from '../utils/transformData';


export default function SummaryTable() {
     const {productState} = useContext(ProductListContext)
     const data = productState?.data.length > 0 ? transformProducts(productState?.data) : []
     const targetRef = useRef();
     let grandTotalAmount = 0; 
  return (
   <>
  
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        padding: '16px',
        marginTop: '16px',
        display: 'flex',
        flexDirection: 'column', 
        width: '100%',
        maxWidth: '1200px',
        overflow: 'hidden', 
      }}
    >
      
    <Box
     
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#fff',
        marginBottom: '16px', 
      }}
    >
      {/* Summary Text */}
   
      <Button 
       onClick={() => generatePDF(targetRef, {filename: `Summary of ${getTodayDate()}.pdf`})}
      sx={{
        maxWidth:"200px",
        float:"right"
       }} variant="contained" color="primary">
        Download
      </Button>

      {/* Download Button */}
     
    </Box>
    <Box ref={targetRef}>
    <Typography sx={{borderBottom: '1px solid #ccc',marginBottom:"20px"}} variant="h6" component="div">
        Summary of {getTodayDate()}
      </Typography>
    {
        data?.length>0 && <TableContainer component={Paper}>
        <Table  sx={{ minWidth: 650 }} aria-label="pricing table">
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
            {data?.map((row, index) => {
              grandTotalAmount =grandTotalAmount+ row.totalAmount
              console.log(grandTotalAmount)
              return (
                <TableRow key={index}>
                  <TableCell>{row.itemName}</TableCell>
                  {row.variant?.map((entry, i) => (
                    <TableCell key={i}>{`${entry.rate}(${entry.qty})`}</TableCell>
                  ))}
                  <TableCell>{row.totalQty}</TableCell>
                  <TableCell>{formatMoney(row.totalAmount)}</TableCell>
                </TableRow>
              )
            })}
             <TableRow >
                  <TableCell sx={{
                    textAlign:"right",fontWeight:"bold"
                  }} colSpan={7}>Grand Total - </TableCell>
                  <TableCell sx={{textDecoration:"underline",fontWeight:"bold"}}>{formatMoney(grandTotalAmount)}</TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    }
    </Box>
    </Box>
   </>
  )
}

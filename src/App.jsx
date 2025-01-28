import { Container } from "@mui/material"
import ItemForm from "./components/ItemForm"
import ItemTableList from "./components/ItemTable"
import { ProductListProvider } from "./context/productList"


function App() {
  return (
    <ProductListProvider>
       <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center everything horizontally
        padding: '16px',
      }}
    >
      {/* ItemForm Component */}
      <ItemForm />

      {/* ItemTableList Component */}
      <ItemTableList />
    </Container>
    </ProductListProvider>
  )
}

export default App

import { Container } from "@mui/material"
import ItemForm from "./components/ItemForm"
import ItemTableList from "./components/ItemTable"
import SummaryTable from "./components/SummaryTable"
import { ProductListProvider } from "./context/productList"


function App() {
  return (
    <ProductListProvider>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
        }}
      >
        <ItemForm />
        <ItemTableList />
        <SummaryTable />
      </Container>
    </ProductListProvider>
  )
}

export default App

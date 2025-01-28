import ItemForm from "./components/ItemForm"
import { ProductListProvider } from "./context/productList"


function App() {
  return (
    <ProductListProvider>
      <ItemForm/>
    </ProductListProvider>
  )
}

export default App

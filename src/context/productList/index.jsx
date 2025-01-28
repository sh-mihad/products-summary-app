/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { ProductListContext, productInitialState, productReducer } from "./ProductListContext";

export const ProductListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, productInitialState);
  
    return (
      <ProductListContext.Provider value={{ productState:state, productDispatch:dispatch }}>
        {children}
      </ProductListContext.Provider>
    );
  };
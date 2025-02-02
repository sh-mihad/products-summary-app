/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { LOAD_DATA_FROM_STORAGE, ProductListContext, productInitialState, productReducer } from "./ProductListContext";

export const ProductListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, productInitialState);

    useEffect(()=>{
      dispatch({type:LOAD_DATA_FROM_STORAGE})
    },[])
  
    return (
      <ProductListContext.Provider value={{ productState:state, productDispatch:dispatch }}>
        {children}
      </ProductListContext.Provider>
    );
  };
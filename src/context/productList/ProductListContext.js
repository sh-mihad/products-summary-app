import { createContext } from "react";

export const productInitialState = [];

// action types
export const ADD_PRODUCT = "ADD/PRODUCT";
export const REMOVE_PRODUCT = "REMOVE/PRODUCT";


//reducer function
export const productReducer = (state, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return [ action.payload ,...state];
      case REMOVE_PRODUCT:
        return [...state].filter(item=>item.id !== action.payload);
      default:
        return state;
    }
  };

  // Create Context
export const ProductListContext = createContext();
import { createContext } from "react";

export const productInitialState = [];

// action types
export const ADD_PRODUCT = "ADD/PRODUCT";
export const REMOVE_PRODUCT = "REMOVE/PRODUCT";


//reducer function
export const productReducer = (state, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return [ ...state, action.payload ];
      case REMOVE_PRODUCT:
        return [...state].map(item=>item.id !== action.payload);
      default:
        return state;
    }
  };

  // Create Context
export const ProductListContext = createContext();
import { createContext } from "react";
import getTodayDate from "../../utils/getTodayDate";

export const productInitialState = {
  date: "",
  data: [],
};

// action types
export const ADD_PRODUCT = "ADD/PRODUCT";
export const REMOVE_PRODUCT = "REMOVE/PRODUCT";
export const REMOVE_ALL_PRODUCT = "REMOVE_ALL/PRODUCT";
export const LOAD_DATA_FROM_STORAGE = "LOAD_DATA";

//reducer function
export const productReducer = (state, action) => {
  console.log("state", state);
  console.log("todayDate", getTodayDate());
  switch (action.type) {
    case LOAD_DATA_FROM_STORAGE: {
      const loadedState = JSON.parse(localStorage.getItem("summaryData"));
      return loadedState || { date: "", data: [] };
    }
    case ADD_PRODUCT: {
      const todayDate = getTodayDate();
      let updatedState;
      console.log("action.payload", action.payload);
      if (todayDate !== state.date) {
      updatedState = { 
          ...state, 
          date: todayDate, 
          data :[...state.data,{...action.payload}]
        };
      } else {
        updatedState = {...state, data: [...state.data,{...action.payload}] };
      }
      localStorage.setItem("summaryData", JSON.stringify(updatedState));
      return JSON.parse(localStorage.getItem("summaryData"));
    }
    case REMOVE_PRODUCT: {
      const updatedState = {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
      localStorage.setItem("summaryData", JSON.stringify(updatedState));
      return JSON.parse(localStorage.getItem("summaryData"));
    }
    case REMOVE_ALL_PRODUCT: {
      localStorage.setItem(
        "summaryData",
        JSON.stringify({ date: "", data: [] })
      );
      return { date: "", data: [] };
    }

    default:
      return state;
  }
};

// Create Context
export const ProductListContext = createContext();

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { VITE_NODE_ENV } from "@src/environment";
import { ProductReducer } from "@src/store/reducer";

const reducer = combineReducers({ ProductReducer });

export const store = configureStore({
  reducer,
  devTools: VITE_NODE_ENV !== "production",
});

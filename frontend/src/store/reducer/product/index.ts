import { createSlice } from '@reduxjs/toolkit';
const initialState = {};

const Product = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
});

export const ProductReducer = Product.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { FetchAllProduct } from '@src/store/action';
import { ProductDto } from '@src/store/dto';

interface ProductState {
  loading: boolean;
  products: ProductDto[];
  error: string;
}

const initialState: ProductState = {
  loading: true,
  products: [],
  error: '',
};

const Product = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchAllProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = typeof payload === 'string' ? payload : '';
        state.products =
          typeof payload !== 'string' ? (payload as ProductDto[]) : [];
      });
  },
});

export const ProductReducer = Product.reducer;

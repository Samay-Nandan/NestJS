import { createSlice } from '@reduxjs/toolkit';
import { DefaultProduct } from '@src/constant';
import { FetchAllProduct, FetchProductById } from '@src/store/action';
import { ProductDto } from '@src/store/dto';

interface ProductState {
  loading: boolean;
  products: ProductDto[];
  product: ProductDto;
  error: string;
}

const initialState: ProductState = {
  loading: true,
  products: [],
  product: DefaultProduct,
  error: '',
};

const Product = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = typeof payload === 'string' ? payload : '';
        state.products =
          typeof payload !== 'string' ? (payload as ProductDto[]) : [];
      })
      .addCase(FetchProductById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = typeof payload === 'string' ? payload : '';
        state.product =
          typeof payload !== 'string'
            ? (payload as ProductDto)
            : DefaultProduct;
      });
  },
});

export const ProductReducer = Product.reducer;

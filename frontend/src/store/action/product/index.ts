import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpRequest, ProductURL, RequestMethod } from '@src/utils';
import {
  FETCH_ALL_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  UPDATE_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
  CREATE_PRODUCT_BY_ID,
} from '@src/store/types';

export const FetchAllProduct = createAsyncThunk(FETCH_ALL_PRODUCTS, () => {
  return HttpRequest({ url: ProductURL, method: RequestMethod.GET });
});

export const FetchProductById = createAsyncThunk(FETCH_PRODUCT_BY_ID, (id) => {
  return HttpRequest({ url: `${ProductURL}/${id}`, method: RequestMethod.GET });
});

export const UpdateProductById = createAsyncThunk(
  UPDATE_PRODUCT_BY_ID,
  (id, body) => {
    return HttpRequest({
      url: `${ProductURL}/${id}`,
      method: RequestMethod.PATCH,
      body,
    });
  }
);

export const DeleteProductById = createAsyncThunk(
  DELETE_PRODUCT_BY_ID,
  (id) => {
    return HttpRequest({
      url: `${ProductURL}/${id}`,
      method: RequestMethod.DELETE,
    });
  }
);

export const CreateProductById = createAsyncThunk(
  CREATE_PRODUCT_BY_ID,
  (id, body) => {
    return HttpRequest({
      url: `${ProductURL}/${id}`,
      method: RequestMethod.POST,
      body,
    });
  }
);

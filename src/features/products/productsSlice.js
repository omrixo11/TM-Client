
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PRODUCT_URL = 'http://localhost:5001/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(PRODUCT_URL);
    console.log(response.data,'products Data')
    return response.data;
  },
);

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    });
    },
});

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export default productsSlice.reducer;
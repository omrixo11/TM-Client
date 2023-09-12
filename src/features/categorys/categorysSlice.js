
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CATEGORY_URL = 'http://localhost:5001/category';

export const fetchCategorys = createAsyncThunk(
  'categorys/fetchCategorys',
  async () => {
    const response = await axios.get(CATEGORY_URL);
    console.log(response.data,'categorys Data')
    return response.data;
  },
);


const initialState = {
  categorys: [],
    status: 'idle',
    error: null,
};

const categorysSlice = createSlice({
  name: 'categorys',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategorys.pending, (state) => {
    state.status = 'loading';
    })
    .addCase(fetchCategorys.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.categorys = action.payload;
    })
    .addCase(fetchCategorys.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
    });
    },
});

export const selectAllCategorys = (state) => state.categorys.categorys;
export const getCategorysStatus = (state) => state.categorys.status;
export const getCategorysError = (state) => state.categorys.error;

export default categorysSlice.reducer;
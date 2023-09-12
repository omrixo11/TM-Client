// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        // Include the product name in the payload
        const { id, name, promoprice } = action.payload;
        state.cart.push({ id, name, promoprice, quantity: 1 });
      }
    },
    sumCart: (state) => {
       
      const SumOfCart = state.cart.reduce((accumulator,item) => accumulator+ (item.quantity*item.promoprice),0);
    //   const itemInCart = state.cart.length
    state.total = SumOfCart ;
    console.log(SumOfCart,'SUM REDUX')
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
       console.log(action.payload.id,"actop,");
      const removeItem = state.cart.filter((item) =>  item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  sumCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
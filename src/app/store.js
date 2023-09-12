import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import productReducer from '../features/products/productsSlice'
import categorysReducer from '../features/categorys/categorysSlice';
import {cartReducer} from '../features/cart/cartSlice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products : productReducer,
    categorys: categorysReducer,
    cart: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store)
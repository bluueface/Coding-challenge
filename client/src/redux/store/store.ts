import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
import cartReducer from '../reducers/cartReducer';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

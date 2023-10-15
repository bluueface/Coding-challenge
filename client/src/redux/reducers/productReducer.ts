import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';

export interface ProductsState {
  products: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const initialProductsState: ProductsState = {
  products: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    },
    loadProductsSuccess: (
      state,
      action: PayloadAction<Product[] | undefined>,
    ) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    loadProductsFailure: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const { startLoading, loadProductsSuccess, loadProductsFailure } =
  productsSlice.actions;

export default productsSlice.reducer;

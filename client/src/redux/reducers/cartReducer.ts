import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../models/Cart';

export interface CartState {
  items: CartItem[];
}

const initialCartState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    increaseItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(
        (item) => item?.product?.id === action.payload.product?.id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
      }
    },
    updateItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(
        (item) => item?.product?.id === action.payload.product?.id,
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const {
  addItemToCart,
  increaseItemQuantity,
  updateItemQuantity,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;

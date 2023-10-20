import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../models/Cart';

export interface CartState {
  items: CartItem[];
  total: number;
}

const calculateTotal = (item: CartItem) =>
  item.product ? item.product.price * item.quantity : 0;

const initialCartState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem[]>) => {
      let total = 0;
      for (const item of action.payload) {
        total += calculateTotal(item);
      }
      state.items = action.payload;
      state.total = total;
    },
    increaseItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(
        (item) => item?.product?.id === action.payload.product?.id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
        state.total += calculateTotal(item);
      }
    },
    updateItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(
        (item) => item?.product?.id === action.payload.product?.id,
      );
      if (item) {
        item.quantity = action.payload.quantity;
        state.total = calculateTotal(item);
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

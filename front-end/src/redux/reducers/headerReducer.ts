import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
  className: string;
}

const initialHeadersState: HeaderState = {
  className: 'header',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeadersState,
  reducers: {
    changeHeaderStyle: (state, action: PayloadAction<string>) => {
      state.className = action.payload;
    },
  },
});

export const { changeHeaderStyle } = headerSlice.actions;

export default headerSlice.reducer;

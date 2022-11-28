// this file for creating reducers and all for counter functions
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0, // variable initialized to zero
};

export const counterSlice = createSlice({
  name: 'counter', // name of the slice
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      console.log('incremented by 1 yo');
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

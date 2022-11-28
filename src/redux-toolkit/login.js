import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: 0,
};

export const loginSlice = createSlice({
  name: 'login', // name of the slice
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = 1;
      console.log('user is logged in yo');
    },
    logOut: (state) => {
      state.isLoggedIn = 0;
      console.log('user is logged out yo');
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;

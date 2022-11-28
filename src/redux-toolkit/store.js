import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import loginReducer from './login';
// import { loginSlice } from './counter';
// const loginReducer = loginSlice.reducer;
// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
});

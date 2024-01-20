/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    authentication: authSlice,
  },
});

export default store;

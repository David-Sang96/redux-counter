import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

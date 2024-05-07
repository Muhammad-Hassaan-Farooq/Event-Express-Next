import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isAuth: false,
    token: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = {
        isAuth: true,
        token: action.payload,
      };
    },
    logout: (state) => {
      state.value = {
        isAuth: false,
        token: "",
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;

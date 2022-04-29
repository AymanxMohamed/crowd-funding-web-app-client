import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const slice = createSlice({
  name:'auth',
  initialState,
  reducers: {

  }
});

const authReducer = slice.reducer;

export const authActions = slice.actions;
export default authReducer;

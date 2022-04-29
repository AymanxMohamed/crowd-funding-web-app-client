import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const slice = createSlice({
  name:'auth',
  initialState,
  reducers: {
    toggle(state){
      state.isLoggedIn = !state.isLoggedIn;
    }
  }
});

const authReducer = slice.reducer;

export const authActions = slice.actions;
export default authReducer;

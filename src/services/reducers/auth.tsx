import { createSlice } from "@reduxjs/toolkit";

const initialState = { authenticated: true, user: null, authTokents: null };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleStatus(state) {
      state.authenticated = !state.authenticated;
    },
    setTokens(state, action) {
      state.authTokents = action.payload;
    },
  },
});

const authReducer = slice.reducer;

export const authActions = slice.actions;
export default authReducer;

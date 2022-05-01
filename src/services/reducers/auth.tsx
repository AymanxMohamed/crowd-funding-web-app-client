import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import AuthState from "../types/AuthState";
import Token from "../types/Token";

const initialState: AuthState = {
  authenticated: true,
  user: undefined,
  tokens: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleStatus(state) {
      state.authenticated = !state.authenticated;
    },
    setTokens(
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) {
      state.tokens = action.payload;
      localStorage.setItem("authTokens", JSON.stringify(action.payload));
    },
    setUser(state, action: PayloadAction<string>) {
      let { username } = jwt_decode(action.payload) as Token;
      state.user = {username};
    },
  },
});

export const { toggleStatus, setUser, setTokens } = authSlice.actions;
export default authSlice.reducer;


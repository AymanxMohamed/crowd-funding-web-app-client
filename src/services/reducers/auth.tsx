import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import AuthState from "../types/AuthState";
import { getInitialState } from "../utils/auhUtils";
import User from "../types/User";

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState() as AuthState,
  reducers: {
    setTokens(
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) {
      state.tokens = action.payload;
    },
    setUser(state, action: PayloadAction<string>) {
      state.user = jwt_decode(action.payload) as User;
    },
    logout(state) {
      state.tokens = undefined;
      state.user = undefined;
      localStorage.removeItem("authTokens");
      sessionStorage.removeItem("authTokens");
    }
  },
});

export const { setUser, setTokens, logout } = authSlice.actions;
export default authSlice.reducer;


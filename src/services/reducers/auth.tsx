import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import AuthState from "../types/AuthState";
import Token from "../types/Token";
import { getInitialState } from "../utils/auhUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState() as AuthState,
  reducers: {
    setTokens(
      state,
      action: PayloadAction<{ access: string; refresh: string }>
    ) {
      state.tokens = action.payload;
      localStorage.setItem("authTokens", JSON.stringify(action.payload));
    },
    setUser(state, action: PayloadAction<string>) {
      let { username } = jwt_decode(action.payload) as Token;
      state.user = { username };
    },
    logout(state) {
      state.tokens = undefined;
      state.user = undefined;
      localStorage.removeItem("authTokens");
    }
  },
});

export const { setUser, setTokens, logout } = authSlice.actions;
export default authSlice.reducer;


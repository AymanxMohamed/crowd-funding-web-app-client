import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setUser(state, action: PayloadAction<User>) {
      if(action.payload.email)
        state.user = action.payload;
    },
    logout(state) {
      state.tokens = undefined;
      state.user = undefined;
      localStorage.removeItem("authTokens");
      localStorage.removeItem("userData");
      sessionStorage.removeItem("authTokens");
      sessionStorage.removeItem("userData");
    }
  },
});

export const { setUser, setTokens, logout } = authSlice.actions;
export default authSlice.reducer;


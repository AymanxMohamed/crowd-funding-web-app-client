import { AppDispatch } from "../../app/store";
import { setTokens, setUser } from "../reducers/auth";
import {
  getUserTokens,
  updateToken,
} from "./../../services/api/authentication";

export const login = (username: any, password: any) => {
  return async (dispatch: AppDispatch) => {
    // 1-  get user tokens
    try {
      const tokens = await getUserTokens(username, password);
      dispatch(setTokens(tokens));
      dispatch(setUser(tokens.refresh));
    } catch (err) {
      // todo create an notification service that will help you to inform the user with erros
      // and another important things like show a spinner while the request is being processed
      console.log(err);
    }
  };
};

export const refreshToken = (token: string) => {
  console.log("update token called");
  return async (dispatch: AppDispatch) => {
    const tokens = await updateToken(token);
    dispatch(setTokens(tokens));
    dispatch(setUser(tokens.refresh));
    console.log(`Access Token: ${tokens.access}`);
    console.log(`Refresh Token: ${tokens.refresh}`);
  };
};

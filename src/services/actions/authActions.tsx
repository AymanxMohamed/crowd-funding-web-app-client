import { AppDispatch } from "../../app/store";
import { setTokens, setUser, toggleStatus } from "../reducers/auth";
import { getUserTokens } from "./../../services/api/authentication";

export const login = (username: any, password: any) => {
  return async (dispatch: AppDispatch) => {
    // 1-  get user tokens
    try {
      const tokens = await getUserTokens(username, password);
      dispatch(setTokens(tokens));
      dispatch(toggleStatus());
      dispatch(setUser(tokens.refresh));
      console.log(`Access Token: ${tokens.access}`);
      console.log(`Refresh Token: ${tokens.refresh}`);
    } catch (err) {
      // todo create an notification service that will help you to inform the user with erros
      // and another important things like show a spinner while the request is being processed
      console.log(err);
    }
  };
};

import { Dispatch } from "react";
import { authActions } from "../reducers/auth";
import { getUserTokens } from "./../../services/api/authentication";

export const login = async () => {
  return async (dispatch: Dispatch<{type: string, payload?: any}>) => {
    // 1-  get user tokens
    try {
      const tokens = await getUserTokens("ayman", "1234561");
      dispatch(authActions.setTokens(tokens));
      dispatch(authActions.toggleStatus());
    } catch (err) {
      // todo create an notification service that will help you to inform the user with erros
      // and another important things like show a spinner while the request is being processed
      console.log(err);
    }
  };
};

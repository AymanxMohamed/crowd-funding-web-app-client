import jwtDecode from "jwt-decode";
import Token from "../types/Token";

export const getInitialState = () => {
  let tokensString = localStorage.getItem("authTokens");
  if (tokensString) {
    let tokens = JSON.parse(tokensString);
    let { username } = jwtDecode(tokens.access) as Token;
    return { tokens, user: { username } };
  }
  return { user: undefined, tokens: undefined };
};

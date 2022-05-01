import jwtDecode from "jwt-decode";
import Token from "../types/Token";

export const getTokens = () => {
  let tokensString = localStorage.getItem("authTokens");
  if (tokensString) {
    return JSON.parse(tokensString);
  }
  return null;
};

export const getInitialState = () => {
  let tokens = getTokens();
  if (tokens) {
    let { username } = jwtDecode(tokens.access) as Token;
    return { tokens, user: { username } };
  }
  return { user: undefined, tokens: undefined };
};

import jwtDecode from "jwt-decode";
import Token from "../types/Token";
import dayjs from 'dayjs'

export const isTokenExpired = (access: string) => {
  const accessToken = jwtDecode(access) as Token;
  return dayjs.unix(accessToken.exp).diff(dayjs()) < 1;
};

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

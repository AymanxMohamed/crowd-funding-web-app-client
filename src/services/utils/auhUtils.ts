import jwtDecode from "jwt-decode";
import User from "../types/User";
import dayjs from 'dayjs'

export const isTokenExpired = (access: string) => {
  const accessToken = jwtDecode(access) as User;
  return dayjs.unix(accessToken.exp).diff(dayjs()) < 1;
};

export const getTokens = () => {
  let localStorageTokens = localStorage.getItem("authTokens");
  let sessionStorageTokens = sessionStorage.getItem("authTokens");
  if (localStorageTokens) {
    return JSON.parse(localStorageTokens);
  } else if (sessionStorageTokens) {
    return JSON.parse(sessionStorageTokens);
  }
  return null;
};

export const getInitialState = () => {
  let tokens = getTokens();
  if (tokens) {
    let user: User = jwtDecode(tokens.access);
    return {user, tokens}
  }
  return { User: undefined, tokens: undefined };
};


export const updateStorage = (tokens: { access: string; refresh: string }) => {
  let localStorageTokens = localStorage.getItem("authTokens");
  if (localStorageTokens) {
    localStorage.setItem("authTokens", JSON.stringify(tokens));
  } else {
    sessionStorage.setItem("authTokens", JSON.stringify(tokens));
  }
};

import jwtDecode from "jwt-decode";
import Token from "../types/Token";
import dayjs from "dayjs";
import User from "../types/User";

export const isTokenExpired = (access: string) => {
  const accessToken = jwtDecode(access) as Token;
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

export const getUserData = () => {
  let localStorageUserData = localStorage.getItem("userData");
  let sessionStorageUserData = sessionStorage.getItem("userData");
  if (localStorageUserData) {
    return JSON.parse(localStorageUserData);
  } else if (sessionStorageUserData) {
    return JSON.parse(sessionStorageUserData);
  }
  return null;
};

export const getInitialState = () => {
  let tokens = getTokens();
  if (tokens) {
    return { user: getUserData(), tokens };
  }
  return { User: undefined, tokens: undefined };
};

export const updateStorageTokens = (tokens: {
  access: string;
  refresh: string;
}) => {
  let localStorageTokens = localStorage.getItem("authTokens");
  if (localStorageTokens) {
    localStorage.setItem("authTokens", JSON.stringify(tokens));
  } else {
    sessionStorage.setItem("authTokens", JSON.stringify(tokens));
  }
};

export const updateStorageUserData = (userData: User) => {
  let localStorageUserData = localStorage.getItem("userData");
  if (localStorageUserData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    sessionStorage.setItem("userData", JSON.stringify(userData));
  }
};

import axiosInstance from "../../app/axiosClient";
import { useAppDispatch } from "../../app/hooks";
import { refreshToken } from "../api/authentication";
import { setTokens, setUser } from "../reducers/auth";
import { getTokens, isTokenExpired } from "../utils/auhUtils";

const useAxios = () => {
  const dispatch = useAppDispatch();
  axiosInstance.interceptors.request.use(async (req: any) => {
    let tokens = getTokens();
    if (tokens) {
      if (isTokenExpired(tokens.access)) {
        tokens = await refreshToken(tokens.refresh);
        dispatch(setTokens(tokens));
        dispatch(setUser(tokens.access));
      }
      req.headers.Authorization = `Bearer ${tokens.access}`;
    }
    return req;
  });
  return axiosInstance;
};

export default useAxios;

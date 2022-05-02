import { useAppDispatch } from "../../app/hooks";
import { setTokens, setUser } from "../reducers/auth";
import LoginData from "../types/loginData";
import useAxios from "./useAxios";

const useAuthApi = () => {
  const dispatch = useAppDispatch();
  const axiosClient = useAxios();

  const getUserTokens = async (
    email: string,
    password: string,
    type?: string
  ) => {
    const response = await axiosClient.post(type ? `token/${type}` : "token", {
      email,
      password,
    });
    return response.data;
  };

  const login = async ({ email, password, checked }: LoginData) => {
    try {
      const tokens = await getUserTokens(email, password);
      if (checked.length) {
        localStorage.setItem("authTokens", JSON.stringify(tokens));
      } else {
        sessionStorage.setItem("authTokens", JSON.stringify(tokens));
      }
      dispatch(setTokens(tokens));
      dispatch(setUser(tokens.refresh));
    } catch (err: any) {
      throw new Error(err.response.data.detail);
    }
  };
  return {
    login,
  };
};

export default useAuthApi;

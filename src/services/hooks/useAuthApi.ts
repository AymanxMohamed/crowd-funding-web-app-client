import { useAppDispatch } from "../../app/hooks";
import { setTokens, setUser } from "../reducers/auth";
import useAxios from "./useAxios";

const useAuthApi = () => {
  const dispatch = useAppDispatch();
  const axiosClient = useAxios();

  const getUserTokens = async (
    username: string,
    password: string,
    type?: string
  ) => {
    const response = await axiosClient.post(type ? `token/${type}` : "token", {
      username: username,
      password: password,
    });
    return response.data;
  };

  const login = async (username: any, password: any) => {
    try {
      const tokens = await getUserTokens(username, password);
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

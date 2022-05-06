import { useAppDispatch } from "../../app/hooks";
import { setTokens, setUser } from "../reducers/auth";
import LoginData from "../types/loginData";
import useAxios from "./useAxios";

/// AAA123@@@bbb
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

  const register = async (values: any) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("phone_number", values.phone_number);
    if (values.profile_picture)
      formData.append(
        "profile_picture",
        values.profile_picture,
        values.profile_picture.name
      );
    try {
      const response = await axiosClient.post("users/register", formData);
      return response.data;
    } catch (err: any) {
      if (err.message === "Network Error") {
        throw new Error("Server is Offline Now");
      }
      throw err.response.data;
    }
  };

  const update = async (values: any) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("phone_number", values.phone_number);
    if (values.profile_picture)
      formData.append(
        "profile_picture",
        values.profile_picture,
        values.profile_picture.name
      );
    try {
      const response = await axiosClient.put("users/update", formData);
      return response.data;
    } catch (err: any) {
      if (err.message === "Network Error") {
        throw new Error("Server is Offline Now");
      }
      throw err.response.data;
    }
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
      if (err.message === "Network Error") {
        throw new Error("Server is Offline Now");
      }
      throw new Error(err.response.data.detail);
    }
  };
  return {
    login,
    register,
    update
  };
};

export default useAuthApi;

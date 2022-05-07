import { useAppDispatch } from "../../app/hooks";
import { setTokens, setUser } from "../reducers/auth";
import LoginData from "../types/loginData";
import User from "../types/User";
import {
  generateInitialUserData,
  updateStorageUserData,
} from "../utils/auhUtils";
import useAxios from "./useAxios";

const useAuthApi = () => {
  const dispatch = useAppDispatch();
  const axiosClient = useAxios();

  const refreshUserData = (newUserData: User) => {
    dispatch(setUser(newUserData));
    updateStorageUserData(newUserData);
  };

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

    for (let key in values) if (values[key]) formData.append(key, values[key]);

    try {
      let response = await axiosClient.patch("users/update", formData);
      console.log(response);
      // her you have to update user data
      let userData: User = {
        id: 1,
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        profilePicture: "",
      };
      refreshUserData(userData);
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
      const userData = generateInitialUserData(tokens.refresh);
      if (checked.length) {
        localStorage.setItem("authTokens", JSON.stringify(tokens));
        localStorage.setItem("userData", JSON.stringify(userData));
      } else {
        sessionStorage.setItem("authTokens", JSON.stringify(tokens));
        sessionStorage.setItem("userData", JSON.stringify(userData));
      }
      dispatch(setTokens(tokens));
      dispatch(setUser(userData));
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
    update,
  };
};

export default useAuthApi;

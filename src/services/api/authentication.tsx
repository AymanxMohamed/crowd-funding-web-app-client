import axiosClient from "../../app/axiosClient";

export const getUserTokens = async (username: string, password: string) => {
  const response = await axiosClient.post("token/", {
    username: username,
    password: password,
  });
  return response.data;
};

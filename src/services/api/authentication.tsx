import axiosClient from "../../app/axiosClient";

export const getUserTokens = async (
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

export const updateToken = async (token: string) => {
  const response = await axiosClient.post("token/refresh", {
    refresh: token,
  });
  return response.data;
};

export const getProjects = async () => {
  const response = await axiosClient.get("projects");
  return response.data;
}
import axios from "axios";
import { getTokens, isTokenExpired } from "../services/utils/auhUtils";
import { refreshToken } from "../services/api/authentication";

const baseURL = `http://localhost:8000`;

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;

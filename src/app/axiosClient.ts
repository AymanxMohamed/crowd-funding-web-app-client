import axios from "axios";
import {API_URL} from "./config"
const baseURL = API_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;

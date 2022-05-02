import axios from "axios";

const baseURL = `http://localhost:8000`;

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;

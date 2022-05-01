import axios from "axios";
import { getTokens } from "../services/utils/auhUtils";


export default axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getTokens()?.access ||  ''}`
  },
});

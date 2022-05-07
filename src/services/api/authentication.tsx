import axios from "axios";
import { updateStorageTokens } from "../utils/auhUtils";
import {API_URL as baseURL} from "../../app/config";
import User from "../types/User";


export const refreshToken = async (refresh: string) => {
  const response = await axios.post(`${baseURL}/token/refresh`, {
    refresh,
  });
  updateStorageTokens(response.data);

  return response.data;
};



//  note any api reqeust mustn't be added to this file but add it inside a hook file it's a must 
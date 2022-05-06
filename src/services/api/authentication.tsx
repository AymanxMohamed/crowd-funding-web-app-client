import axios from "axios";
import { updateStorage } from "../utils/auhUtils";
import {API_URL as baseURL} from "../../app/config";


export const refreshToken = async (refresh: string) => {
  const response = await axios.post(`${baseURL}/token/refresh`, {
    refresh,
  });
  updateStorage(response.data);

  return response.data;
};

//  note any api reqeust mustn't be added to this file but add it inside a hook file it's a must 
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { refreshToken } from "../actions/authActions";
import useAuth from "./useAuth";

const useRefresh = () => {
  const dispatch = useAppDispatch();
  const { tokens } = useAuth();

  useEffect(() => {
    let id = setTimeout(() => {
      if (tokens)
        dispatch<any>(refreshToken(tokens?.refresh as string));
    }, 5 * 60000);
    return () => clearTimeout(id);
  }, [dispatch, tokens]);
};

export default useRefresh;

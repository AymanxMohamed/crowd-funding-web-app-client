import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { refreshToken } from "../actions/authActions";
import useAuth from "./useAuth";

/// This Hook is Sending A request to refresh the token every 4 minitues

const useRefresh = () => {
  const dispatch = useAppDispatch();
  const { tokens } = useAuth();

  useEffect(() => {
    let id = setTimeout(() => {
      if (tokens) dispatch<any>(refreshToken(tokens?.refresh as string));
    }, 4 * 60000);
    return () => clearTimeout(id);
  }, [dispatch, tokens]);
};

export default useRefresh;

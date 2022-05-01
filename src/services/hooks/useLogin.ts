import { setTokens, setUser } from "../reducers/auth";
import { useAppDispatch } from "../../app/hooks";

const useLogin = () => {
  const dispatch = useAppDispatch();
  let tokensString = localStorage.getItem("authTokens");
  if (tokensString) {
    let authTokens = JSON.parse(tokensString);
    dispatch(setTokens(authTokens));
    dispatch(setUser(authTokens.access));
  }
};

export default useLogin;

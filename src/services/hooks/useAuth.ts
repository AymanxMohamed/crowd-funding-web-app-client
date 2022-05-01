import { useAppSelector } from "../../app/hooks";

const useAuth = () => {
  return useAppSelector(state => state.auth);
}

export default  useAuth;

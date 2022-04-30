import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((state:any) => state.auth);
}

export default  useAuth;

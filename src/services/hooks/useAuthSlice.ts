import { useAppSelector } from "../../app/hooks";

const useAuthSlice = () => {
  return useAppSelector(state => state.auth);
}

export default  useAuthSlice;

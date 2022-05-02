import useAuth from "../../services/hooks/useAuthSlice";
import { useLocation } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();
  console.log("called");

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth"} state={{ from: location }} replace />
  );
};
export default RequireAuth;

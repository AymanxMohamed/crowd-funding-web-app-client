import useAuth from "../../services/hooks/useAuth";
import { useLocation } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};
export default RequireAuth;

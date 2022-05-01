import useAuth from "../../services/hooks/useAuthSlice";
import { useLocation } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};
export default RequireAuth;

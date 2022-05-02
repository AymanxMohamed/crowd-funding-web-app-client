import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../services/hooks/useAuthSlice";

const AuthLayout: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  const location = useLocation();
  
  return user ? (
    <Navigate to={"/"} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default AuthLayout;

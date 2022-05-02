import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../services/hooks/useAuthSlice";

const AuthLayout: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <>
      {user && (
        <p>
          Hello {user.firstName} {user.lastName}
        </p>
      )}
      <Outlet />
    </>
  );
};

export default AuthLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../services/hooks/useAuth";

const AuthLayout: React.FC = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <>
      {user && <p>Hello {user.username}</p>}
      <Outlet />
    </>
  );
};

export default AuthLayout;

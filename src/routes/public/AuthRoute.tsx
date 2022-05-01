import { Navigate, useLocation, useRoutes } from "react-router-dom";
import React from "react";
import LoginView from "../../views/pages/authentication/views/LoginView";
import RegisterView from "../../views/pages/authentication/views/RegisterView";
import AuthLayout from "../../views/pages/authentication/AuthLayout";

export default function AuthRoute() {
  const location = useLocation();
  return useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Navigate to={"login"} state={{ from: location }} replace />,
        },
        { path: "login", element: <LoginView /> },
        { path: "register", element: <RegisterView /> },
        { path: "*", element: <Navigate to={"/404"} /> },
      ],
    },
  ]);
}

import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import AuthLayout from "../../pages/authentication/AuthLayout";
import LoginView from "../../pages/authentication/views/LoginView";
import RegisterView from "../../pages/authentication/views/RegisterView";

const authRoute: RouteObject = {
  path: '/auth',
  element: <AuthLayout/>,
  children: [
    { path: '', element: <LoginView /> },
    { path: 'login', element: <LoginView /> },
    { path: 'logout', element: <RegisterView /> },
    { path: 'register', element: <RegisterView /> },
    { path: '*', element: <Navigate to={'/404'} /> },
  ],
};

export default  authRoute;

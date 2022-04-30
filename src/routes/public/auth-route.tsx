import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import AccountLayout from "../../views/pages/account/AccountLayout";
import LoginView from "../../views/pages/authentication/views/LoginView";
import RegisterView from "../../views/pages/authentication/views/RegisterView";

const authRoute: RouteObject = {
  path: '/auth',
  element: <AccountLayout/>,
  children: [
    { path: '', element: <Navigate to={'login'} replace/> },
    { path: 'login', element: <LoginView /> },
    { path: 'register', element: <RegisterView /> },
    { path: '*', element: <Navigate to={'/404'} replace/> },
  ],
};

export default  authRoute;

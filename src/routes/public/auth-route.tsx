import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import Login from "../../views/pages/account/Login";
import Register from "../../views/pages/account/Register";
import AccountLayout from "../../views/pages/account/AccountLayout";

const authRoute: RouteObject = {
  path: '/account',
  element: <AccountLayout/>,
  children: [
    { path: '', element: <Login /> },
    { path: 'login', element: <Register /> },
    { path: 'register', element: <Register /> },
    { path: '*', element: <Navigate to={'/404'} /> },
  ],
};

export default  authRoute;

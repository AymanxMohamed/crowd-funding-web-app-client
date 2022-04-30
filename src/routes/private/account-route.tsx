import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import Login from "../../views/pages/account/Login";
import Register from "../../views/pages/account/Register";
import AccountDetailView from "../../views/pages/account/components/AccountDetailView";
import AccountLayout from "../../views/pages/account/AccountLayout";


const accountRoute: RouteObject = {
  path: 'account',
  element: <AccountLayout/>,
  children: [
    { path: '', element: <AccountDetailView /> },
    { path: '*', element: <Navigate to='/404' /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: ':id', element: <AccountDetailView /> },
  ],
};

export default accountRoute;

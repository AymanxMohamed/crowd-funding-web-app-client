import AccountLayout from "../../pages/account/AccountLayout";
import { Navigate, RouteObject } from "react-router-dom";
import AccountDetailView from "../../pages/account/views/AccountDetailView";
import React from "react";

const accountRoute: RouteObject = {
  path: 'account',
  element: <AccountLayout/>,
  children: [
    { path: '', element: <AccountDetailView /> },
    { path: '*', element: <Navigate to='/404' /> },
    { path: ':id', element: <AccountDetailView /> },
  ],
};

export default accountRoute;

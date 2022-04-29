import AccountLayout from "../pages/account/AccountLayout";
import { Navigate } from "react-router-dom";
import AccountDetailView from "../pages/account/views/AccountDetailView";
import React from "react";

const accountRoutes = {
  path: 'account',
  element: <AccountLayout/>,
  children: [
    { path: '*', element: <Navigate to='/404' /> },
    { path: ':id', element: <AccountDetailView /> },
  ],
};

export default accountRoutes;

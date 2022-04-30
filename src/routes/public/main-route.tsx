import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import HomePage from "../../views/pages/homepage";
import MainLayout from "../../views/common/Layouts/MainLayout";
import PageNotFoundView from "../../views/pages/errors/PageNotFoundView";

const mainRoute: RouteObject = {
  path: '/',
  element: <MainLayout/>,
  children: [
    { path: '', element: <HomePage /> },
    { path: 'account', element: <Navigate to='account' replace={false}/> },
    { path: '404', element: <PageNotFoundView /> },
    { path: '*', element: <Navigate to='/404' /> },
  ],
};

export default  mainRoute;

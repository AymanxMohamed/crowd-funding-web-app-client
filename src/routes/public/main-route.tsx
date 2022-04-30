import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import MainLayout from "../../views/layouts/MainLayout";
import PageNotFoundView from "../../views/pages/errors/PageNotFoundView";
import HomePage from "../../views/pages/homepage";

const mainRoute: RouteObject = {
  path: '',
  element: <MainLayout/>,
  children: [
    { path: '', element: <HomePage /> },
    { path: 'account', element: <Navigate to='account' /> },
    { path: '*', element: <Navigate to='/404' /> },
    { path: '404', element: <PageNotFoundView /> },
    { path: '/', element: <HomePage /> },
    { path: '/account', element: <Navigate to='account' /> },
    { path: '*', element: <PageNotFoundView /> },
  ],
};

export default  mainRoute;

import MainLayout from "../../pages/main/MainLayout";
import { Navigate, RouteObject } from "react-router-dom";
import MainView from "../../pages/main/views/MainView";
import PageNotFoundView from "../../pages/error/PageNotFoundView";
import React from "react";

const mainRoute: RouteObject = {
  path: '/',
  element: <MainLayout/>,
  children: [
    { path: '', element: <MainView /> },
    { path: 'account', element: <Navigate to='account' /> },
    { path: '*', element: <Navigate to='/404' /> },
    { path: '404', element: <PageNotFoundView /> },
  ],
};

export default  mainRoute;

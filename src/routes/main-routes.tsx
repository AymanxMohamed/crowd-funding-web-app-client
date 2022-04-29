import MainLayout from "../pages/main/MainLayout";
import { Navigate } from "react-router-dom";
import MainView from "../pages/main/views/MainView";
import PageNotFoundView from "../pages/error/PageNotFoundView";
import React from "react";

const mainRoutes = {
  path: '/',
  element: <MainLayout/>,
  children: [
    { path: '*', element: <Navigate to='/404' /> },
    { path: '/', element: <MainView /> },
    { path: '404', element: <PageNotFoundView /> },
    { path: 'account', element: <Navigate to='account' /> },
  ],
};

export default  mainRoutes;

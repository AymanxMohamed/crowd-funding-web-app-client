import { Navigate, RouteObject } from "react-router-dom";
import React from "react";
import HomePage from "../views/pages/homepage";
import MainLayout from "../views/layouts/MainLayout";
import PageNotFoundView from "../views/pages/errors/PageNotFoundView";

const mainRoute: RouteObject = {
  path: '',
  element: <MainLayout/>,
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/account', element: <Navigate to='account' /> },
    { path: '*', element: <PageNotFoundView /> },
  ],
};

export default  mainRoute;

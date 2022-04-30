import React from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import MainLayout from "../../views/common/Layouts/MainLayout";
import PageNotFoundView from "../../views/pages/errors/PageNotFoundView";
import HomePage from "../../views/pages/homepage";

export default function MainRoute() {
  const location  = useLocation();
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <HomePage /> },
        {
          path: "account",
          element: <Navigate to="account" state={{ from: location }} replace />,
        },
        { path: "404", element: <PageNotFoundView /> },
        {
          path: "*",
          element: <Navigate to="/404" state={{ from: location }} replace />,
        },
      ],
    },
  ]);
}

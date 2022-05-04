import React from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import AccountLayout from "../../views/pages/account/AccountLayout";
import AccountDetailView from "../../views/pages/account/components/AccountDetailView";
import Login from "../../views/pages/account/Login";
import Register from "../../views/pages/account/Register";
import Profile from "../../views/pages/account/Profile";

export default function AccountRoute() {
  const location = useLocation();
  const element = useRoutes([
    {
      path: "/",
      element: <AccountLayout />,
      children: [
        { path: "", element: <AccountDetailView /> },
        {
          path: "*",
          element: <Navigate to="/404" state={{ from: location }} replace />,
        },
        { path: ":id", element: <AccountDetailView /> },
      ],
    },
  ]);
  return element;
}

import { Navigate, useLocation, useRoutes } from "react-router-dom";
import React from "react";
import AccountDetailView from "../../views/pages/account/components/AccountDetailView";
import CreateProject from "../../views/pages/projects/CreateProject";
import ProjectLayout from "../../views/pages/projects/ProjectLayout";

export default function ProjectsRoute() {
  const location = useLocation();
  return useRoutes([
    {
      path: "/",
      element: <ProjectLayout />,
      children: [
        { path: "", element: <AccountDetailView /> },
        { path: "new", element: <CreateProject /> },
        { path: "show/:id", element: <CreateProject /> },
        { path: "edit/:id", element: <CreateProject /> },
        { path: "delete/:id", element: <CreateProject /> },
        {
          path: "*",
          element: <Navigate to="/404" state={{ from: location }} replace />,
        },
      ],
    },
  ]);
}

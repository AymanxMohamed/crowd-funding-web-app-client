import { Navigate, useLocation, useRoutes } from "react-router-dom";
import React from "react";
import AccountDetailView from "../../views/pages/account/components/AccountDetailView";
import CreateProject from "../../views/pages/projects/CreateProject";
import AllProjects from "../../views/pages/projects/AllProjects";
import ProjectLayout from "../../views/pages/projects/ProjectLayout";
import ViewProject from "../../views/pages/projects/ViewProject";

export default function ProjectsRoute() {
  const location = useLocation();
  return useRoutes([
    {
      path: "/",
      element: <ProjectLayout />,
      children: [
        { path: "", element: <AllProjects /> },
        { path: ":id", element: <ViewProject /> },
        {
          path: "*",
          element: <Navigate to="/404" state={{ from: location }} replace />,
        },
      ],
    },
  ]);
}

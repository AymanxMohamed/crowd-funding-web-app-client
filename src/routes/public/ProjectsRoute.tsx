import { Navigate, useLocation, useRoutes } from "react-router-dom";
import React from "react";
import AllProjects from "../../views/pages/projects/AllProjects";
import ProjectLayout from "../../views/pages/projects/ProjectLayout";
import ViewProject from "../../views/pages/projects/ViewProject";
import LatestProjects from "../../views/pages/projects/LatestProjects";
import SearchProjects from "../../views/pages/projects/SearchProjects";

export default function ProjectsRoute() {
  const location = useLocation();
  return useRoutes([
    {
      path: "/",
      element: <ProjectLayout />,
      children: [
        { path: "all", element: <AllProjects /> },
        { path: ":id", element: <ViewProject /> },
        { path: "search/:keyword", element: <SearchProjects /> },
        { path: "latest", element: <LatestProjects /> },
        {
          path: "*",
          element: <Navigate to="/404" state={{ from: location }} replace />,
        },
      ],
    },
  ]);
}

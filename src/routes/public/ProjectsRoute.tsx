import { Navigate, useLocation, useRoutes } from "react-router-dom";
import React from "react";
import AllProjects from "../../views/pages/projects/AllProjects";
import ProjectLayout from "../../views/pages/projects/ProjectLayout";
import LatestProjects from "../../views/pages/projects/LatestProjects";
import SearchProjects from "../../views/pages/projects/SearchProjects";
import ProjectView from "../../views/pages/projects/ProjectView";
import ProjectsByCategory from "../../views/pages/projects/ProjectsByCategory";

export default function ProjectsRoute() {
  const location = useLocation();
  return useRoutes([
    {
      path: "/",
      element: <ProjectLayout />,
      children: [
        { path: "all", element: <AllProjects /> },
        { path: ":id", element: <ProjectView /> },
        { path: "search/:keyword", element: <SearchProjects /> },
        { path: "category/:id/:category", element: <ProjectsByCategory /> },
        { path: "latest", element: <LatestProjects /> },
        {
          path: "*",
          element: <Navigate to="/404" state={{ from: location }} replace />,
        },
      ],
    },
  ]);
}

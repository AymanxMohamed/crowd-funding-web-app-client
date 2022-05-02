import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../views/common/layouts/MainLayout";
import PageNotFoundView from "../views/pages/errors/PageNotFoundView";
import HomePage from "../views/pages/homepage";
import RequireAuth from "./guards/RequireAuth";
import ProjectsRoute from "./private/ProjectsRoute";
import AuthRoute from "./public/AuthRoute";

const Routes2: React.FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Routes */}
        <Route path="auth/*" element={<AuthRoute />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
          <Route path="projects/*" element={<ProjectsRoute />} />
        </Route>

        {/* Error Handling */}
        <Route path="404" element={<PageNotFoundView />} />
        <Route
          path="*"
          element={<Navigate to={"404"} state={{ from: location }} replace />}
        />
      </Route>
    </Routes>
  );
};

export default Routes2;

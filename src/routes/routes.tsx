import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../views/common/layouts/MainLayout";
import PageNotFoundView from "../views/pages/errors/PageNotFoundView";
import HomePage from "../views/pages/homepage";
import RequireAuth from "./guards/RequireAuth";
import ProjectsRoute from "./public/ProjectsRoute";
import AuthRoute from "./public/AuthRoute";
import AccountRoute from "./private/AccountRoute";
import MyProjectsRoute from "././private/MyProjectsRoute"

const Routes2: React.FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="auth/*" element={<AuthRoute />} />
        <Route path="projects/*" element={<ProjectsRoute />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="profile/*" element={<AccountRoute />} />
          <Route path="my-projects/*" element={<MyProjectsRoute />} />
        </Route>

      </Route>
      <Route path="404" element={<PageNotFoundView />} />
      <Route
          path="*"
          element={<Navigate to={"404"} state={{ from: location }} replace />}
      />
    </Routes>
  );
};

export default Routes2;

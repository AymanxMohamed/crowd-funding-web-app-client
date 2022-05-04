import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../views/common/layouts/MainLayout";
import PageNotFoundView from "../views/pages/errors/PageNotFoundView";
import HomePage from "../views/pages/homepage";
import RequireAuth from "./guards/RequireAuth";
import ProjectsRoute from "./private/ProjectsRoute";
import AuthRoute from "./public/AuthRoute";
import Profile from "../views/pages/account/Profile";

const Routes2: React.FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Routes */}
        <Route path="auth/*" element={<AuthRoute />} />
        <Route path="/" element={<HomePage />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
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

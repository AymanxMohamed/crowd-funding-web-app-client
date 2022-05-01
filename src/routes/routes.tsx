import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./guards/RequireAuth";
import AccountRoute from "./private/AccountRoute";
import AuthRoute from "./public/AuthRoute";
import MainRoute from "./public/MainRoute";


const Routes2: React.FC = (): JSX.Element => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/account/*" element={<AccountRoute />} />

      {/* Protected Routes */}
      <Route element={<RequireAuth />}>
        <Route path="/*" element={<MainRoute />} /> 
      </Route>
    </Routes>
  );
};

export default Routes2;

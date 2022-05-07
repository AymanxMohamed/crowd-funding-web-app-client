import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import Header from "../../pages/homepage/components/Header";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={4000} />
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;

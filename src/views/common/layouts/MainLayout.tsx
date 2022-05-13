import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import Navbar from "../SharedComponents/Navbar";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={4000} />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;

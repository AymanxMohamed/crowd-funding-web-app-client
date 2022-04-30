import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Outlet/>
    </>
  );
};

export default AuthLayout;

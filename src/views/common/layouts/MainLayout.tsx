import React from 'react';
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import Header from '../../pages/homepage/components/Header';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;

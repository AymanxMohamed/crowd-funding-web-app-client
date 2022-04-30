import React from 'react';
import { Outlet} from 'react-router-dom';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;

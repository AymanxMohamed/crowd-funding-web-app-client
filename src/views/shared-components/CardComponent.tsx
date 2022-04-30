import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default MainLayout;

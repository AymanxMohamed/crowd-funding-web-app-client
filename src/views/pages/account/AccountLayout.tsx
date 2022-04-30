import React from 'react';
import {Outlet} from 'react-router-dom';

const AccountLayout: React.FC = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AccountLayout;

import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <h1>MainLayout</h1>
      <Outlet />
      <br />
      <button>
        <Link to='/'>Back</Link>
      </button>
      <button>
        <Link to='/account'>Account</Link>
      </button>
    </div>
  );
};

export default MainLayout;

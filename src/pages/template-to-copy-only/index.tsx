import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const TemplateLayout: React.FC = (): JSX.Element => {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <Outlet />
      <br />
      <button>
        <Link to='/'>Back</Link>
      </button>
    </div>
  );
};

export default TemplateLayout;

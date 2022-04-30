import React from 'react';
import {Outlet} from 'react-router-dom';

const ProjectLayout: React.FC = (): JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default ProjectLayout;

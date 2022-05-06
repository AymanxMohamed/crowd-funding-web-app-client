import React from 'react';
import {Outlet} from 'react-router-dom';

const ProjectLayout: React.FC = (): JSX.Element => {
  return (
    <div>
        <div
            className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
            <Outlet />
        </div>
    </div>
  );
};
export default ProjectLayout;

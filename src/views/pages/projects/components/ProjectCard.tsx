import React from 'react';
import CircularProgress from '../../../common/SharedComponents/CircularProgress';

type Props = {
  // projectData: object
}
const ProjectCard: React.FC<Props> = (/* { projectData } */): JSX.Element => {
  return (
    <div className="p-3">
      <div
        className="app-image-card m-auto max-w-xs rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: "url(https://elementor.zozothemes.com/lendiz/wp-content/uploads/sites/33/2020/01/pro-3-1-527x694.jpg)" }}>
        <div className="app-image-card-back"></div>
        <div className="p-5 app-image-card-content">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 text-sm font-normal text-slate-300">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 content-center">
            <CircularProgress progressPercent={0.2} />
            <div className="text-white m-auto">
              <div>TARGET</div>
              <div>$15,000</div>
            </div>
            <a href="#" className="m-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-2.5 text-center">
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

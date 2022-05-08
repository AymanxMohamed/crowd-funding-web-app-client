import React from 'react';
import CircularProgress from '../../../common/SharedComponents/CircularProgress';
import moneyFormat from '../../../common/utils/moneyFormat';

interface projectCardProps {
  projectData: {
    id: number;
    title: string;
    details: string;
    images: string[];
    is_featured: boolean;
    imageLabel: string;
    total_target: number;
    total_donations: number;
  };
  projectUrl: string;
  actionButton: string;
}

const ProjectCard: React.FC<projectCardProps> = ({ projectData, projectUrl, actionButton }): JSX.Element => {
  let donationPercent = projectData.total_donations / projectData.total_target;
  
  return (
    <div className="p-1">
      <div
        className="app-image-card m-auto max-w-xs rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: "url(https://elementor.zozothemes.com/lendiz/wp-content/uploads/sites/33/2020/01/pro-3-1-527x694.jpg)" }}>
        <div className="app-image-card-back"></div>
        <div className="p-1 app-image-card-content">
          <a href="#">
            <h5 className="mb-2 px-3 text-lg font-bold tracking-tight text-white">
              { projectData.title }
            </h5>
          </a>
          <p className="mb-3 px-3 text-sm font-normal text-slate-300">
            { projectData.details }
          </p>
          <div className="grid grid-cols-3 content-center">
            <CircularProgress progressPercent={donationPercent} />
            <div className="text-white m-auto">
              <div>TARGET</div>
              <div>{ moneyFormat(projectData.total_target) }</div>
            </div>
            <a href={projectUrl} className="m-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center">
              { actionButton }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

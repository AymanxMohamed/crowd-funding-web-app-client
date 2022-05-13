import React from 'react';
import CircularProgress from '../../../common/SharedComponents/CircularProgress';
import moneyFormat from '../../../common/utils/moneyFormat';
import {Link} from "react-router-dom";
import imageLink from "../../../common/utils/imageLink";

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
    <Link to={"/projects/" + projectData.id} className="p-1">
      <div
        className="app-image-card m-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:scale-98"
        style={{ backgroundImage: 'url(' + imageLink(projectData.images[0]) + ')' }}>
        <div className="app-image-card-back"></div>
        <div className="p-1 app-image-card-content">
          <h5 className="mb-2 px-3 text-lg font-bold tracking-tight text-white">
            { projectData.title }
          </h5>
          <p className="mb-3 px-3 text-sm font-normal text-slate-300">
            { projectData.details }
          </p>
          <div className="flex flex-row">
            <CircularProgress progressPercent={donationPercent} />
            <div className="text-white m-auto">
              <div>TARGET</div>
              <div>{ moneyFormat(projectData.total_target) }</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

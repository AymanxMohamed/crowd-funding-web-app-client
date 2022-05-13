import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import useProjectsApi from "../../../../services/hooks/useProjectsApi";
import ProjectCard from "./ProjectCard";

const ProjectsGrid: React.FC<any> = ({title,projects}): JSX.Element => {

    return (
        <div className="block p-6 text-left w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 self-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <hr/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-content-evenly">
                {projects.map((project: any) => (
                    <ProjectCard
                        key={project.id}
                        projectData={project}
                        projectUrl={`projects/${project.id}`}
                        actionButton="DONATE"
                    />
                ))}
            </div>
        </div>

    );
};

export default ProjectsGrid;

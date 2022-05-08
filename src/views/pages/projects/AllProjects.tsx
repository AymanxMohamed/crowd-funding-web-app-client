import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useProjectsApi from '../../../services/hooks/useProjectsApi';
import ProjectCard from './components/ProjectCard';

const CreateProject: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
    setShow(false);
  };

  const projectsApi = useProjectsApi();

  useEffect(() => {
    projectsApi.getProjects().then((projects) => {
      console.log(projects);

      setProjects(projects);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-evenly">
      {projects.map((project: any) => (
        <ProjectCard
          key={project.id}
          projectData={project}
          projectUrl={`projects/${project.id}`}
          actionButton="DONATE"
        />
      ))}
    </div>
  );
};

export default CreateProject;

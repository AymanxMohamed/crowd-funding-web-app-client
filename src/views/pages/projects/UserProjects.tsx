import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../../app/hooks';
import useProjectsApi from '../../../services/hooks/useProjectsApi';
import ProjectCard from './components/ProjectCard';

const UserProject: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const [projects, setProjects] = useState([]);
  const projectsApi = useProjectsApi();
  const user = useAppSelector(state => state.auth.user)

  console.log(user?.id);

  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
    setShow(false);
  };

  useEffect(() => {
    if (user?.id) {
      projectsApi.getUserProjects(user?.id).then((projects) => {
        console.log(projects);

        setProjects(projects);
      });
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-evenly">
      {projects.map((project: any) => (
        <ProjectCard
          key={project.id} projectData={project}
          projectUrl={`my-projects/${project.id}`}
          actionButton="EDIT"
        />
      ))}
    </div>
  );
};

export default UserProject;

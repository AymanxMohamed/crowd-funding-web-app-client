import React, { useEffect, useState } from 'react';
import useProjectsApi from '../../../services/hooks/useProjectsApi';
import Loading from "../../common/SharedComponents/Loading";
import ProjectsGrid from "./components/ProjectsGrid";

const UserProject: React.FC = (): JSX.Element => {
  const [loaded,setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);
  const projectsApi = useProjectsApi();

  useEffect(() => {
      projectsApi.getMyProjects().then((projects) => {
        setProjects(projects);
        setLoaded(true)
      });
  }, []);

  return loaded ? <ProjectsGrid title="My Projects" projects={projects}/> : <Loading/>
};

export default UserProject;

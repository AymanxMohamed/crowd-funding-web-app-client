import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useProjectsApi from '../../../services/hooks/useProjectsApi';
import ProjectCard from './components/ProjectCard';
import ProjectsGrid from "./components/ProjectsGrid";
import Loading from "../../common/SharedComponents/Loading";

const CreateProject: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);


  const projectsApi = useProjectsApi();

  useEffect(() => {
    projectsApi.getProjects().then((projects) => {
      setProjects(projects);
      setLoaded(true)
    });
  }, []);
  return loaded ? <ProjectsGrid title="All Projects" projects={projects}/> : <Loading/>

};

export default CreateProject;

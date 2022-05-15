import React, { useEffect, useState } from 'react';
import useProjectsApi from '../../../services/hooks/useProjectsApi';
import Loading from "../../common/SharedComponents/Loading";
import ProjectsGrid from "./components/ProjectsGrid";
import {useParams} from "react-router-dom";

const LatestProject: React.FC = (): JSX.Element => {
  const [loaded,setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);
  const projectsApi = useProjectsApi();
  const {id,category} = useParams()
  useEffect(() => {
      projectsApi.getProjectsByCategory(id).then((projects) => {
        setProjects(projects);
        setLoaded(true)
      });
  }, []);

  return loaded ? <ProjectsGrid title={category + " Projects"} projects={projects}/> : <Loading/>
};

export default LatestProject;

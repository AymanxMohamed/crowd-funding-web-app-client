import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useProjectsApi from '../../../services/hooks/useProjectsApi';
import ProjectCard from './components/ProjectCard';
import ProjectsGrid from "./components/ProjectsGrid";
import Loading from "../../common/SharedComponents/Loading";

const SearchProjects: React.FC = (): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  const projectsApi = useProjectsApi();
  const {keyword} = useParams()
  useEffect(() => {
    if(keyword)
      projectsApi.searchProjects(keyword).then((projects) => {
        setProjects(projects);
        setLoaded(true)
      });
  }, [keyword]);
  return loaded ? <ProjectsGrid title={"Projects search: " + keyword} projects={projects}/> : <Loading/>

};

export default SearchProjects;

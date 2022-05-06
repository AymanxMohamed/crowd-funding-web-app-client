import { url } from 'inspector';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import CircularProgress from '../../common/SharedComponents/CircularProgress';
import Navbar from "../../common/SharedComponents/Navbar";
import ProjectCard from './components/ProjectCard';

const CreateProject: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {

    navigate('/');
    setShow(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default CreateProject;

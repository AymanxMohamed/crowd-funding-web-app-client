import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar from "../../common/SharedComponents/Navbar";

const CreateProject: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {

    navigate('/');
    setShow(false);
  };

  return (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default CreateProject;

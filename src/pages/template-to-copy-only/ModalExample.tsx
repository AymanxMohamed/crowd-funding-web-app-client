import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const LoginView: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {

    navigate('/');
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginView;

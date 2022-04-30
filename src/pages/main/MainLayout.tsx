import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { Container } from "react-bootstrap";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <Container className={'min-vh-100'}>
      <h1>MainLayout</h1>
      <Outlet />
      <br />
      <button>
        <Link to='/'>Back</Link>
      </button>
      <button>
        <Link to='/account'>Account</Link>
      </button>
    </Container>
  );
};

export default MainLayout;

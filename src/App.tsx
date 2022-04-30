import React, { Fragment } from 'react';
import './App.css';
import Routes from "./routes/routes";
import Navbar from "./common/sharedComponents/Navbar";
import { Container } from "react-bootstrap";

function App() {

  return (
    <Fragment>
      <Navbar/>
      <Container className={'min-vh-100'}>
        <Routes/>
      </Container>
    </Fragment>
  );
}

export default App;

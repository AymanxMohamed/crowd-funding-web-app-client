import React, { Fragment, useEffect } from 'react';
import Routes from "./routes/routes";
import Navbar from "./common/sharedComponents/Navbar";
import { Container } from "react-bootstrap";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
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

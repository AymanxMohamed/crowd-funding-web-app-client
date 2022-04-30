import React from 'react';
import { Container } from "react-bootstrap";

const PageNotFoundView: React.FC = (): JSX.Element => {
  return (
    <Container>
        <h1 className={'text-center'}>404 Page Not Found!! 😢😢😢</h1>
    </Container>
  );
};

export default PageNotFoundView;

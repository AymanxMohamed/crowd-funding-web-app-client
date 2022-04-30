import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const AppNavbar: React.FC = (): JSX.Element => {
  const linkClasses = ({ isActive }: { isActive: boolean }): string => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <Navbar bg="dark" expand="lg" variant={'dark'}>
      <Container>
        <Link to={'/'} className={'navbar-brand'}>
          <Navbar.Brand>Crowd Funding App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={linkClasses} to="/">Main</NavLink>
            <NavLink className={linkClasses} to="account">Account</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar;

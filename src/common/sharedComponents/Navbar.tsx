import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AppNavbar: React.FC = (): JSX.Element => {
  const linkClasses = ({ isActive }: { isActive: boolean }): string => (isActive ? 'nav-link active' : 'nav-link');
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  return (
    <Navbar bg="dark" expand="md" variant={'dark'} sticky={'top'}>
      <Container>
        <Link to={'/'} className={'navbar-brand'}>Crowd Funding App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={linkClasses} to="/">Main</NavLink>
            <NavLink className={linkClasses} to="account">Account</NavLink>
          </Nav>
          <div className="d-flex">
            { !isLoggedIn && <Link to={'auth/login'} className={'btn btn-outline-light mx-2'}>Login</Link> }
            { !isLoggedIn && <Link to={'auth/register'} className={'btn btn-outline-light mx-2'}>Register</Link> }
            { isLoggedIn && <Link to={'auth/logout'} className={'btn btn-outline-light mx-2'}>Logout</Link> }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar;

import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link {
  color: white;
  text-decoration: none;
  &:hover {
    color: grey;
  }
}
`;


const NaviBar = () => {
  return (
    <>
    <Styles>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Bloggers</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link><Link to="/">Home</Link></Nav.Link>
    <Nav.Link><Link to="./users">Users</Link></Nav.Link>
    <Nav.Link><Link to="./about">About</Link></Nav.Link>
    </Nav>
    </Container>
    <Button variant="secondary" className="m-2"> Log in</Button>
  </Navbar>
  </Styles>
  </>
  )
}

export default NaviBar;

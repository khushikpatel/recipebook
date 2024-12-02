import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/Home">Foodbook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/recipe">Recipe</Nav.Link>
            <Nav.Link as={Link} to="/collection">Collection</Nav.Link>
            <Nav.Link as={Link} to="/tips">Tips</Nav.Link>
          </Nav>
          <SearchBar />
          <Button as={Link} to="/login" variant="outline-primary" className="mx-2">Login</Button>
          <Button as={Link} to="/register" variant="primary">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

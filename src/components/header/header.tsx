'use client'
import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="/flipup.png" // Replace with your logo's public\flipup.png
            alt="Filp Up"
            height="30"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Search Bar */}
          <Form className="d-flex mx-auto" style={{ width: "50%" }}>
            <FormControl
              type="search"
              placeholder="What service are you looking for today?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>

          {/* Navigation Links */}
          <Nav className="ms-auto">
            <NavDropdown title="Flip UP Pro" id="fiverr-pro-dropdown">
              <NavDropdown.Item href="/pro">Overview</NavDropdown.Item>
              <NavDropdown.Item href="/pro/benefits">Benefits</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Explore" id="explore-dropdown">
              <NavDropdown.Item href="/categories">Categories</NavDropdown.Item>
              <NavDropdown.Item href="/trending">Trending</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/language">
              <i className="bi bi-globe"></i> English
            </Nav.Link>
            <Nav.Link href="/seller">Become a Partner</Nav.Link>
            <Nav.Link href="/login">Sign in</Nav.Link>
            <Button variant="outline-success" href="/join" className="ms-2">
              Join
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand as={NavLink} exact to="/">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

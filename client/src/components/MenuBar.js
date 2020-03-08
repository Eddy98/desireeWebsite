import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MenuBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Desiree Cruz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/contactMe" className="nav-links-padding">Contact Me</Nav.Link>
            <Nav.Link href="/homes" className="nav-links-padding">Homes</Nav.Link>
            <Nav.Link href="/about" className="nav-links-padding">About</Nav.Link>
            <Nav.Link href="/" className="nav-links-padding">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

export default MenuBar;

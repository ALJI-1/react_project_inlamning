import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router';

export  function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Music site nr 1</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="../">Home</Nav.Link>
            <Nav.Link as={Link} to="../about">About</Nav.Link>

          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="../artistList">All our music bands</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="../about">surprise Me</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="../detailpage">Details</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router';


export function NavMenu() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-4"
      style={{
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px',
      }}
    >
      <Navbar.Brand
        style={{
          padding: '0 10px',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '1.8rem',
          color: '#ff5733',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        LordsOfTheSound
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e0e0e0';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
        }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ alignItems: 'center' }}>
          <Nav.Link
            as={Link}
            to="../"
            style={{
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              padding: '10px 15px',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'inherit';
              e.target.style.fontSize = '1.2rem';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'inherit';
              e.target.style.fontSize = '1rem';
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="../about"
            style={{
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              padding: '10px 15px',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'inherit';
              e.target.style.fontSize = '1.2rem';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'inherit';
              e.target.style.fontSize = '1rem';
            }}
          >
            About
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto" style={{ alignItems: 'center' }}>
          <NavDropdown
            title="Pages"
            id="basic-nav-dropdown"
            style={{ padding: '10px 15px' }}
          >
            <NavDropdown.Item
              as={Link}
              to="../artistList"
              style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                padding: '10px 15px',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'inherit';
                e.target.style.fontSize = '1.2rem';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'inherit';
                e.target.style.fontSize = '1rem';
              }}
            >
              List of all our music grops
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="../dailymusic"
              style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                padding: '10px 15px',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'inherit';
                e.target.style.fontSize = '1.2rem';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'inherit';
                e.target.style.fontSize = '1rem';
              }}
            >
              Daily
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              as={Link}
              to="../detailpage"
              style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                padding: '10px 15px',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'inherit';
                e.target.style.fontSize = '1.2rem';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'inherit';
                e.target.style.fontSize = '1rem';
              }}
            >
              Details
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

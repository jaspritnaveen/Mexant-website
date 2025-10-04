import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../Assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nav-sec"
        sticky="top"
        // fixed="top"
      >
        <Container>
          {/* Logo on the left */}
          <Navbar.Brand href="#home">
            <span className="logo-img">
              <img src={logo} alt="Logo" />
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* All links on the right */}
            <Nav className="ms-auto gap-4">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/service">Services</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

              <NavDropdown
                title="Pages"
                id="collapsible-nav-dropdown"
                className="bg-dark"
              >
                <NavDropdown.Item href="/pagesabout">About US</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Our Services
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Contact US
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/test">Testimonials</Nav.Link>
              <Button variant="success" href="/contact" className="ms-3 px-5 ">
                Contact Support
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

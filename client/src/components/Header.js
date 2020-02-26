import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Nav fluid>
      <Container className="text-center">
        <h1>Dance School Portal</h1>
        <h5 id="demo-info" className="text-center">
          This software is set up in DEMO MODE, which will allow you see the
          user interface as it would appear to a user of each role.
        </h5>
      </Container>
    </Nav>
  );
}

export default Header;

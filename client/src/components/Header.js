import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Nav>
      <Container className="text-center text-light">
        <h1>Dance School Portal</h1>
        <h5 className="text-left">
          Dance School Portal is a student/teacher/admin portal for - you
          guessed it - a dance school. Students can see grades, teachers can
          grade students, and various other administrative actions are possible
          depending on the user's role.
        </h5>
        <br />
        <h5 id="demo-info" className="text-left">
          The app is set up in DEMO mode: you can select any user to view the
          app as that user. This allows for easy exploration of the user role
          functionality that controls data access.
        </h5>
      </Container>
    </Nav>
  );
}

export default Header;

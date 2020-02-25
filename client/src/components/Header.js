import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
  return (
    <Jumbotron fluid>
      <Container className="text-center">
        <h1>Dance School Portal</h1>
      </Container>
    </Jumbotron>
  );
}

export default Header;

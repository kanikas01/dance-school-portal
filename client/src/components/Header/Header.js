import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Header extends Component {
  render () {
    return (
      <Jumbotron fluid>
        <Container className="text-center">
          <h1>Dance School Portal</h1>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;

import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Grades extends Component {
  render () {
    return (
      <Container>
        <h3>Grades Tab Content</h3>
        <h6>TODO</h6>
        <ul>
          <li>Add grade</li>
          <li>Update/remove grade</li>
        </ul>
      </Container>
    );
  }
}

export default Grades;
import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Students extends Component {
  render () {
    return (
      <Container>
        <h3>Students Tab Content</h3>
        <h6>TODO</h6>
        <ul>
          <li>Add student</li>
          <li>View/update student</li>
          <li>Get current student emails</li>
        </ul>
      </Container>
    );
  }
}

export default Students;

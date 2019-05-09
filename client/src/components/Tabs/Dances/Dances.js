import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Dances extends Component {
  render () {
    return (
      <Container>
        <h3>Dances Tab Content</h3>
        <h6>TODO</h6>
        <ul>
          <li>See all dances</li>
          <li>Add dance</li>
          <li>Update dance</li>
          <li>Delete dance (if no one has a grade in it)</li>
        </ul>
      </Container>
    );
  }
}

export default Dances;
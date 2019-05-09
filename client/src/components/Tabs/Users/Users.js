import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Users extends Component {
  render () {
    return (
      <Container>
        <h3>Users Tab Content</h3>
        <h6>TODO</h6>
        <ul>
          <li>View all users</li>
          <li>Add/update/disable users</li>
        </ul>
      </Container>
    );
  }
}

export default Users;
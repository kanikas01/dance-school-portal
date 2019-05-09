import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
  render () {
    return (
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Roles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">Dances</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="happy">Marketing</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Navigation;

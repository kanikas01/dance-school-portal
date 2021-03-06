import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import UserSearchForm from "../UserSearchForm";
import UserAddForm from "../UserAddForm";

function Users() {
  return (
    <Container>
      <Tab.Container id="users-tab-nav" defaultActiveKey="search-users">
        <Row>
          <Col md={3} className="mt-3">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="search-users">Search Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="add-user">Add User</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="search-users">
                <h3>Search Users</h3>
                <p>*Submitting an empty form will return all users*</p>
                <UserSearchForm />
              </Tab.Pane>
              <Tab.Pane eventKey="add-user">
                <h3>Add User</h3>
                <UserAddForm />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Users;

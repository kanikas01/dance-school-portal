import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import UserProfileForm from '../../UserProfileForm';
import UserGrades from '../UserGrades';

function UserProfile({ userId }) {
  return (
    <Container>
      <Tab.Container id="user-profile-tab-nav" defaultActiveKey="user-profile">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="user-profile">My Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="user-grades">My Grades</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="user-profile" unmountOnExit={true}>
                <UserProfileForm userId={userId} />
              </Tab.Pane>
              <Tab.Pane eventKey="user-grades" unmountOnExit={true}>
                <UserGrades userId={userId} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default UserProfile;

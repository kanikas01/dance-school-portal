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
          <Col>
            <UserProfileForm userId={userId} />
            <UserGrades userId={userId} />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default UserProfile;

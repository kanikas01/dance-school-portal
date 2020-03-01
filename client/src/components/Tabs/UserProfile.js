import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import UserProfileForm from "../UserProfileForm";
import UserGrades from "./UserGrades";

function UserProfile({ userId }) {
  return (
    <Container>
      <Tab.Content>
        <Tab.Container
          id="user-profile-tab-nav"
          defaultActiveKey="user-profile"
        >
          <Row>
            <Col lg={6}>
              <UserProfileForm userId={userId} />
            </Col>
            <Col lg={6}>
              <UserGrades userId={userId} />
            </Col>
          </Row>
        </Tab.Container>
      </Tab.Content>
    </Container>
  );
}

export default UserProfile;

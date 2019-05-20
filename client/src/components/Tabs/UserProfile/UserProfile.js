import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import UserProfileForm from "../../UserProfileForm";
import UserGrades from "../UserGrades";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Tab.Container id="user-profile-tab-nav" defaultActiveKey="user-profile">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="user-profile">My Info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="user-grades">My Grades</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane
                  eventKey="user-profile"
                  unmountOnExit={true}>
                  <UserProfileForm userId="1" />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="user-grades"
                  unmountOnExit={true}>
                  <UserGrades userId={this.props.userId} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </>
    );
  }
}

export default UserProfile;

import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import UserSearchForm from '../../UserSearchForm';
import UserAddUpdateForm from '../../UserAddUpdateForm';
import userAPI from "../../../utils/userAPI";


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // userAPI.getUsers()
    //   .then(res => this.setState ({ users: res.data }) )
    //   .catch(err => console.log(err));
  }

  render () {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="search-user">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="search-user">Search Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="add-user">Add User</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="search-user">
                  <UserSearchForm />
                </Tab.Pane>
                <Tab.Pane eventKey="add-user">
                  <UserAddUpdateForm />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Users;
import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import roleAPI from "../../../utils/roleAPI";

class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: []
    };
  }

  componentDidMount() {
    roleAPI.getRoles()
      .then(res => this.setState ({ roles: res.data }) )
      .catch(err => console.log(err));
  }

  render () {
    return (
      <Container>
        <Tab.Container id="roles-tab-nav" defaultActiveKey="view-roles">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="view-roles">View Roles</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="view-roles">
                  <h3>View Roles</h3>
                  <Table bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.roles.map(role => (   
                        <tr key={role.id}>
                          <td>{role.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {/* <ListGroup>
                    {this.state.roles.map((role, index) => (    
                      <ListGroup.Item key={role.id}>{role.name}</ListGroup.Item>
                    ))}
                  </ListGroup> */}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Roles;

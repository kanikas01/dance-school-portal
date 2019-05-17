import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import userAPI from "../../../utils/userAPI";
import { CSVLink, CSVDownload } from "react-csv";

class Marketing extends Component {

  state = {
    users: [],
    marketingList: []
  };

  componentDidMount() {
    let queryString = "?onMarketingList=1";
    userAPI.searchUsers(queryString)
      .then(res => this.setState ({ users: res.data }) )
      // Create marketing email list for download
      .then( () => {
        const newMarketingList = [["first name", "last name", "email"]];
        for (var user of this.state.users) {
          newMarketingList.push([user.firstName, user.lastName, user.email]);
        }
        this.setState ({ marketingList: newMarketingList });   
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <Container>
        <Tab.Container id="marketing-tab-nav" defaultActiveKey="view-marketing">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="view-marketing">Marketing Emails</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="view-marketing">
                  <h3>Marketing List</h3>
                  <CSVLink
                    filename={"dance-school-marketing-list.csv"}
                    className="btn btn-primary"
                    target="_blank"
                    data={this.state.marketingList}>
                    Download marketing email list
                  </CSVLink>
                  <hr/>
                  <ListGroup>
                    {this.state.users.map(user => (   
                      <ListGroup.Item key={user.id}>{user.firstName} {user.lastName} {user.email}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Marketing;
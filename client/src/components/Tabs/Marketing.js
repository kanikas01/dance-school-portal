import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import userAPI from "../../utils/userAPI";
import { CSVLink } from "react-csv";

class Marketing extends Component {
  state = {
    users: [],
    marketingList: []
  };

  componentDidMount() {
    let queryString = "?onMarketingList=1";
    userAPI
      .searchUsers(queryString)
      .then(res => this.setState({ users: res.data }))
      // Create marketing email list for download
      .then(() => {
        const newMarketingList = [["first name", "last name", "email"]];
        for (var user of this.state.users) {
          newMarketingList.push([user.firstName, user.lastName, user.email]);
        }
        this.setState({ marketingList: newMarketingList });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Tab.Container id="marketing-tab-nav" defaultActiveKey="view-marketing">
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="view-marketing">
                  <h3>Marketing List</h3>
                  <CSVLink
                    filename={"dance-school-marketing-list.csv"}
                    className="btn btn-primary d-table mx-auto mb-2"
                    target="_blank"
                    data={this.state.marketingList}
                  >
                    Download marketing email list
                  </CSVLink>
                  <Table bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map(user => (
                        <tr key={user.id}>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
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

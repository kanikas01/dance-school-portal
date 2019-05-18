import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import userAPI from "../../../utils/userAPI";
import { CSVLink, CSVDownload } from "react-csv";
import UserSearchForm from '../../UserSearchForm';
import UserAddForm from '../../UserAddForm';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      students: [],
      studentContacts: []
    };
  }

  componentDidMount() {
    let queryString = "?isActive=1&roleId=2";
    userAPI.searchUsers(queryString)
      .then(res => this.setState ({ students: res.data }) )
      // Create marketing email list for download
      .then( () => {
        const newStudentList = [["first name", "last name", "email"]];
        for (var user of this.state.students) {
          newStudentList.push([user.firstName, user.lastName, user.email]);
        }
        this.setState ({ studentContacts: newStudentList });   
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <Container>
        <Tab.Container id="students-tab-nav" defaultActiveKey="search-students">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="search-students">Search Students</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="add-student">Add Student</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="student-contacts">Student Contacts</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="search-students">
                  <h3>Search Students</h3>
                  <UserSearchForm role="student"/>
                </Tab.Pane>
                <Tab.Pane eventKey="add-student">
                <h3>Add Student</h3>
                  <UserAddForm role="student"/>
                </Tab.Pane>
                <Tab.Pane eventKey="student-contacts">
                  <h3>Student Contact Info</h3>
                  <CSVLink
                    filename="student-contact-list.csv"
                    className="btn btn-primary"
                    target="_blank"
                    data={this.state.studentContacts}>
                    Download Contact List
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
                      {this.state.students.map(student => (   
                        <tr key={student.id}>
                          <td>{student.firstName}</td>
                          <td>{student.lastName}</td>
                          <td>{student.email}</td>
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

export default Students;

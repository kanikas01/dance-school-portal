import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import userAPI from "../../utils/userAPI";
import { CSVLink } from "react-csv";
import UserSearchForm from "../UserSearchForm";
import UserAddForm from "../UserAddForm";
import GradeAddForm from "../GradeAddForm";

function Students() {
  const [studentList, setStudentList] = React.useState([]);
  const studentContactList = [];

  React.useEffect(() => {
    // ideally query Roles table here to get the proper role id instead of hard coding
    // See UserSearchForm for role query
    let queryString = "?isActive=1&roleId=2";
    userAPI
      .searchUsers(queryString)
      .then(res => setStudentList(res.data))
      // Create marketing email list for download
      .then(() => {
        const studentContactList = [["first name", "last name", "email"]];
        for (var user of studentList) {
          studentContactList.push([user.firstName, user.lastName, user.email]);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Tab.Container id="students-tab-nav" defaultActiveKey="search-students">
        <Row>
          <Col md={3} sm={12} className="mt-3">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="search-students">Search Students</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="add-student">Add Student</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="add-grade">Add Grade</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="student-contacts">
                  Student Contacts
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="search-students">
                <h3>Search Students</h3>
                <p>*Submitting an empty form will return all students*</p>
                <UserSearchForm userRole="student" />
              </Tab.Pane>
              <Tab.Pane eventKey="add-student">
                <h3>Add Student</h3>
                <UserAddForm userRole="student" />
              </Tab.Pane>
              <Tab.Pane eventKey="add-grade">
                <h3>Add Grade</h3>
                <GradeAddForm />
              </Tab.Pane>
              <Tab.Pane eventKey="student-contacts">
                <h3>Student Contact Info</h3>
                <CSVLink
                  filename="student-contact-list.csv"
                  className="btn btn-primary d-table mx-auto mb-3"
                  target="_blank"
                  data={studentContactList}
                >
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
                    {studentList.map(student => (
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

export default Students;

import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import userAPI from "../../../utils/userAPI";
import { CSVLink, CSVDownload } from "react-csv";
import UserSearchForm from '../../UserSearchForm';
import UserAddUpdateForm from '../../UserAddUpdateForm';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      roles: [],
      students: [],
      studentContacts: [],
      hideSearchForm: false,
      hideAddForm: true
    };

    this.showSearchForm = this.showSearchForm.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
  }

  showAddForm() {
    this.setState({
      hideAddForm: false,
      hideSearchForm: true
    });
  }

  showSearchForm() {
    this.setState({
      hideAddForm: true,
      hideSearchForm: false
    });
  }

  componentDidMount() {
    let queryString = "?isActive=1&roleId=2";
    userAPI.searchUsers(queryString)
      .then(res => this.setState ({ users: res.data }) )
      // Create marketing email list for download
      .then( () => {
        const newStudentList = [["first name", "last name", "email"]];
        for (var user of this.state.users) {
          newStudentList.push([user.firstName, user.lastName, user.email]);
        }
        this.setState ({ studentContacts: newStudentList });   
      })
      .catch(err => console.log(err));
  }


  render () {
    const addFormStyle = this.state.hideAddForm ? {display: 'none'} : {};
    const searchFormStyle = this.state.hideSearchForm ? {display: 'none'} : {};

    return (
      <Container>
        <Nav variant="pills" defaultActiveKey="search-students">
          <Nav.Item>
            <Nav.Link
              eventKey="search-students"
              onClick={this.showSearchForm}>All Students</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="add-student"
              onClick={this.showAddForm}>Add Student</Nav.Link>
          </Nav.Item>
        </Nav>
        <hr/>

        <div style={searchFormStyle}>
          <h3>Search Students</h3>
          <UserSearchForm />
          <CSVLink
            filename={"student-contact-list.csv"}
            className="btn btn-primary"
            target="_blank"
            data={this.state.studentContacts}>
            Download student contact list
          </CSVLink>
        </div>

        <div style={addFormStyle}>
          <h3>Add Students</h3>
          <UserAddUpdateForm />
        </div>
      </Container>
    );
  }
}

export default Students;

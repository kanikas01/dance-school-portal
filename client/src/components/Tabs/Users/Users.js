import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import UserSearchForm from '../../UserSearchForm';
import UserAddUpdateForm from '../../UserAddUpdateForm';
import userAPI from "../../../utils/userAPI";


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      devNull: "",
      hideSearchForm: false,
      hideAddForm: true
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.showSearchForm = this.showSearchForm.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
  }

  componentDidMount() {
    // userAPI.getUsers()
    //   .then(res => this.setState ({ users: res.data }) )
    //   .catch(err => console.log(err));
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

  render () {
    const addFormStyle = this.state.hideAddForm ? {display: 'none'} : {};
    const searchFormStyle = this.state.hideSearchForm ? {display: 'none'} : {};

    return (
      <Container>
        <Nav variant="pills" defaultActiveKey="search-users">
          <Nav.Item>
            <Nav.Link
              eventKey="search-users"
              onClick={this.showSearchForm}>Search Users</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="add-user"
              onClick={this.showAddForm}>Add User</Nav.Link>
          </Nav.Item>
        </Nav>

        <div style={searchFormStyle}>
          <h3>Search Users</h3>
          <UserSearchForm />
        </div>

        <div style={addFormStyle}>
          <h3>Add User</h3>
          <UserAddUpdateForm />
        </div>

      </Container>
    );
  }
}

export default Users;
import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import UserSearchForm from '../../UserSearchForm';
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

  handleSaveFormSubmit = (event, index) => {
    event.preventDefault();
    // let user = this.state.users[index];
    userAPI.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      isActive: this.state.isActive,
      onMarketingList: this.state.onMarketingList
    })
      .then(res => alert("User saved!"))
      .catch(err => console.log(err));
  };

  render () {
    const addFormStyle = this.state.hideAddForm ? {display: 'none'} : {};
    const searchFormStyle = this.state.hideSearchForm ? {display: 'none'} : {};

    return (
      <Container>
        <h3>Users Tab Content (TODO)</h3>
        <hr />
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
          <UserSearchForm />
        </div>

      </Container>
    );
  }
}

export default Users;
import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import userAPI from "../../../utils/userAPI";


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstName: "",
      lastName: "",
      email: "",
      isActive: 1,
      onMarketingList: 0,
      devNull: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    // userAPI.getUsers()
    //   .then(res => this.setState ({ users: res.data }) )
    //   .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearchFormSubmit = event => {
    event.preventDefault();
    const query = {
      firstName: this.state.firstName ? this.state.firstName : "",
      lastName: this.state.lastName ? this.state.lastName : "",
      email: this.state.email ? this.state.email : "",
      password: this.state.password ? this.state.password : "",
      isActive: this.state.isActive ? 1 : "0",
      onMarketingList: this.state.onMarketingList ? 1 : ""
    };

    let queryString = "?";
    for (let param in query) {
      if (query[param]) queryString += `${param}=${query[param]}&`;
    }

    if (queryString.endsWith("&")) { 
      queryString = queryString.slice(0, -1);
    }

    console.log(queryString);

    userAPI.searchUsers(queryString)
      .then(res => this.setState ({ users: res.data }) )
      .catch(err => console.log(err));
  };

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

  handleDelete = (event, index) => {
    event.preventDefault();
    let user = this.state.users[index];
    userAPI.deleteUser(user.id)
      .then(res => {
        this.setState ({ devNull: this.state.users.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
      <Container>
        <h3>Users Tab Content (TODO)</h3>
        <hr />

        <Form>
          <Form.Group controlId="formGroupFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="name"
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="name"
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formIsActiveCheckbox">
            <Form.Check 
              name="isActive"
              type="checkbox"
              onChange={this.handleInputChange}
              label="Is Active" 
              defaultChecked={this.state.isActive}/>
          </Form.Group>
          <Form.Group controlId="formMarketingCheckbox">
            <Form.Check 
              name="onMarketingList"
              type="checkbox" 
              onChange={this.handleInputChange}
              label="On Marketing List" />
          </Form.Group>
          <Form.Group>
            <Button
              onClick={this.handleSearchFormSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>

        <ButtonToolbar>
          <Button>Search Users</Button>
          <Button>Add User</Button>
        </ButtonToolbar>

        <ListGroup>
        {this.state.users.map(user => ( 
          <ListGroup.Item key={user.id}>{user.id} {user.firstName} {user.lastName} {user.Role.name}</ListGroup.Item>
        ))}
        </ListGroup>

      </Container>
    );
  }
}

export default Users;
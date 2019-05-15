import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import userAPI from "../../utils/userAPI";
import roleAPI from "../../utils/roleAPI";

class UserAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
      roles: [],
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: "",
      isActive: 1,
      onMarketingList: 1,
      devNull: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);
  }

  componentDidMount() {
    roleAPI.getRoles()
      .then(res => this.setState ({ roles: res.data }) )
      .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddFormSubmit = (event, index) => {
    event.preventDefault();
    // let user = this.state.users[index];
    userAPI.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      RoleId: this.state.roleId,
      isActive: this.state.isActive,
      onMarketingList: this.state.onMarketingList
    })
      .then(res => alert("User saved!"))
      .catch(err => console.log(err));
  };

  render () {
    return (
      <>
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
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Role</Form.Label>
            <Form.Control 
              as="select"
              name="roleId"
              type="select"
              onChange={this.handleInputChange}>
            {this.state.roles.map(role => ( 
              <option 
                key={role.id} 
                value={role.id}
                selected={role.name === "student" ? "selected" : ""}>{role.name}</option>
            ))}
            </Form.Control>
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
              label="On Marketing List" 
              defaultChecked={this.state.onMarketingList}/>
          </Form.Group>
          <Form.Group>
            <Button
              onClick={this.handleAddFormSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>

        {/* <ListGroup>
          {this.state.users.map(user => ( 
            <ListGroup.Item key={user.id}>{user.id} {user.firstName} {user.lastName} {user.Role.name}</ListGroup.Item>
          ))}
        </ListGroup> */}
      </>
    );
  }

}


export default UserAddForm;

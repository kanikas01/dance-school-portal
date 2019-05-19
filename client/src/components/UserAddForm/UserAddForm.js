import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      onMarketingList: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);
    this.handleUpdateFormSubmit = this.handleUpdateFormSubmit.bind(this);
  }

  componentDidMount() {
    roleAPI.getRoles()
      .then(res => this.setState ({ roles: res.data }) )
      .then(() => {
        if (this.props.role === "student") {
          let roleInfo = this.state.roles
            .filter(userRole => userRole.name === "student");
          this.setState({
            roleId: roleInfo[0].id
          })
        }
      })
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

      this.handleClearResults();
  };

  handleUpdateFormSubmit = (event, index) => {
    event.preventDefault();
    // let user = this.state.users[index];
    userAPI.updateUser({
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

    this.handleClearResults();
  };

  handleClearResults = () => {
    this.setState ({ 
      roles: [],
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: "",
      isActive: 1,
      onMarketingList: 1
    });
  };

  render () {
    let formGroupAddSelectRole = "";
    let role = this.props.role;
    if (role !== "student") {
      formGroupAddSelectRole = 
      <Form.Group controlId="formGroupAddSelectRole">
        <Form.Label>Select Role</Form.Label>
        <Form.Control 
          as="select"
          name="roleId"
          type="select"
          onChange={this.handleInputChange}>
          <option>Choose...</option>
          {this.state.roles.map(role => ( 
            <option 
              key={role.id} 
              value={this.props.roleId ? this.props.roleId : role.id}>{role.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
    }

    return (
      <>
        <Form>
          <Form.Group controlId="formGroupAddFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="name"
              value={this.props.firstName ? this.props.firstName : this.state.firstName}
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAddLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="name"
              value={this.props.lastName ? this.props.lastName : this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAddEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.props.email ? this.props.email : this.state.email}
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAddPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={this.props.password ? this.props.password : this.state.password}
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          {formGroupAddSelectRole}
          <Form.Group controlId="formGroupAddIsActiveCheckbox">
            <Form.Check 
              name="isActive"
              type="checkbox"
              onChange={this.handleInputChange}
              label="Is Active" 
              defaultChecked={this.props.isActive || this.state.isActive}/>
          </Form.Group>
          <Form.Group controlId="formGroupAddMarketingCheckbox">
            <Form.Check 
              name="onMarketingList"
              type="checkbox"
              onChange={this.handleInputChange}
              label="On Marketing List" 
              defaultChecked={this.props.onMarketingList || this.state.onMarketingList}/>
          </Form.Group>
          <Form.Group>
            <Button
              onClick={this.handleAddFormSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default UserAddForm;

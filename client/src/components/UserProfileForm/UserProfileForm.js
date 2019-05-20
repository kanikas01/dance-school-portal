import React, { Component, } from "react";
import userAPI from "../../utils/userAPI";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isActive: false,
      onMarketingList: false,
      roleName: "",
      roleId: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    userAPI.getUser(this.state.userId)
      .then(res => this.setState({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        password: res.data.password,
        isActive: res.data.isActive,
        onMarketingList: res.data.onMarketingList,
        roleName: res.data.Role.name,
        roleId: res.data.Role.id,
      }))
      .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name) {
      this.setState({
        [name]: value
      });
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    userAPI.updateUser(this.state.userId, {
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

  render() {
    return (
      <div>
        <h3>User Info</h3>
        <Form>
          <Form.Group controlId="formGroupAddFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              value={this.state.firstName}
              type="name"
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAddLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAddEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAddPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAddIsActiveCheckbox">
            <Form.Check
              name="isActive"
              type="checkbox"
              onChange={this.handleInputChange}
              label="Is Active"
              checked={this.state.isActive} />
          </Form.Group>
          <Form.Group controlId="formGroupAddMarketingCheckbox">
            <Form.Check
              name="onMarketingList"
              type="checkbox"
              onChange={this.handleInputChange}
              label="On Marketing List"
              checked={this.state.onMarketingList} />
          </Form.Group>
          <Form.Group>
            <Button
              onClick={this.handleFormSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UserProfileForm;

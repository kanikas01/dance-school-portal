import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import userAPI from '../../utils/userAPI';
import roleAPI from '../../utils/roleAPI';
import UserProfileForm from '../UserProfileForm';
import RoleChangeForm from '../RoleChangeForm';
import UserGrades from '../Tabs/UserGrades';

class UserSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      users: [],
      firstName: '',
      lastName: '',
      email: '',
      studentRoleId: '',
      isActive: 1,
      searchResultsVisible: false,
      show: false,
      userId: '',
      roleId: '',
      resetSelect: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    roleAPI
      .getRoles()
      .then(res => this.setState({ roles: res.data }))
      .then(() => {
        if (this.props.role === 'student') {
          let roleInfo = this.state.roles.filter(
            userRole => userRole.name === 'student'
          );
          this.setState({
            studentRoleId: roleInfo[0].id
          });
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

  handleSearchFormSubmit = (event, role) => {
    event.preventDefault();
    const query = {
      firstName: this.state.firstName ? this.state.firstName : '',
      lastName: this.state.lastName ? this.state.lastName : '',
      email: this.state.email ? this.state.email : '',
      password: this.state.password ? this.state.password : '',
      isActive: this.state.isActive ? 1 : '',
      roleId: this.state.roleId ? this.state.roleId : ''
      // onMarketingList: this.state.onMarketingList ? 1 : ""
    };

    let queryString =
      role === 'student' ? `?roleId=${this.state.studentRoleId}&` : '?';
    for (let param in query) {
      if (query[param]) queryString += `${param}=${query[param]}&`;
    }

    if (queryString.endsWith('&')) {
      queryString = queryString.slice(0, -1);
    }

    console.log(queryString);

    userAPI
      .searchUsers(queryString)
      .then(res =>
        this.setState({
          users: res.data,
          searchResultsVisible: true
        })
      )
      .catch(err => console.log(err));
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event, userId) => {
    this.setState({
      show: true,
      userId: userId
    });
  };

  handleClearResults = (event, index) => {
    this.setState({
      users: [],
      firstName: '',
      lastName: '',
      email: '',
      isActive: 1,
      searchResultsVisible: false,
      roleId: '',
      resetSelect: false
    });

    roleAPI
      .getRoles()
      .then(res => this.setState({ roles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.resetSelect) this.setState({ resetSelect: true });
    const style = this.state.searchResultsVisible ? {} : { display: 'none' };
    let role = this.props.role;
    let isActiveLabel =
      role === 'student'
        ? 'Only search active students'
        : 'Only search active users';

    let formGroupSelectRole = '';
    if (role !== 'student' && this.state.resetSelect) {
      formGroupSelectRole = (
        <Form.Group controlId="formGroupSelectRole">
          <Form.Label>Select Role</Form.Label>
          <Form.Control
            as="select"
            name="roleId"
            type="select"
            onChange={this.handleInputChange}
          >
            <option>Choose...</option>
            {this.state.roles.map(role => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      );
    }

    return (
      <>
        <Form>
          <Form.Group controlId="formSearchFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="formSearchLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder=""
            />
          </Form.Group>
          <Form.Group controlId="formSearchEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder=""
            />
          </Form.Group>
          {formGroupSelectRole}
          <Form.Group controlId="formSearchIsActiveCheckbox">
            <Form.Check
              name="isActive"
              type="checkbox"
              value={this.state.isActive}
              onChange={this.handleInputChange}
              label={isActiveLabel}
              checked={this.state.isActive}
            />
          </Form.Group>
          {/* <Form.Group controlId="formSearchMarketingCheckbox">
            <Form.Check 
              name="onMarketingList"
              type="checkbox" 
              onChange={this.handleInputChange}
              label="On Marketing List" />
          </Form.Group> */}
          <Form.Group>
            <Button
              onClick={event => {
                this.handleSearchFormSubmit(event, role);
              }}
            >
              Submit
            </Button>
            <Button onClick={this.handleClearResults}>Clear Results</Button>
          </Form.Group>
        </Form>
        <div style={style}>
          {this.state.users.length > 0 ? (
            <Table bordered hover size="sm">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => (
                  <tr key={user.id}>
                    <td>{user.firstName} </td>
                    <td>{user.lastName}</td>
                    <td>{user.Role.name}</td>
                    <td>
                      <Button
                        onClick={event => this.handleShow(event, user.id)}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <h3>No Results Found</h3>
          )}
        </div>
        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <UserProfileForm userId={this.state.userId} />
            <hr />
            {role !== 'student' && (
              <>
                <RoleChangeForm userId={this.state.userId} />
                <hr />
              </>
            )}
            <UserGrades userId={this.state.userId} />
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UserSearchForm;

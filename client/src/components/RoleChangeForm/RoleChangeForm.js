import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userAPI from '../../utils/userAPI';
import roleAPI from '../../utils/roleAPI';

class RoleChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      roles: [],
      userId: props.userId,
      roleId: '',
      alertShow: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    roleAPI
      .getRoles()
      .then(res => this.setState({ roles: res.data }))
      .catch(err => console.log(err));

    userAPI
      .getUser(this.state.userId)
      .then(res => this.setState({ roleId: res.data.Role.id }))
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

  handleFormSubmit = event => {
    event.preventDefault();
    userAPI
      .updateUser(this.state.userId, {
        RoleId: this.state.roleId
      })
      .then(res =>
        this.setState({
          alertShow: true
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Change User Role</h3>
        <Alert
          show={this.state.alertShow}
          variant="success"
          dismissible
          onClose={() => this.setState({ alertShow: false })}
        >
          User Saved!
        </Alert>
        <Form>
          <Form.Group controlId="formGroupAddSelectRole">
            <Form.Label>Select Role</Form.Label>
            <Form.Control
              as="select"
              name="roleId"
              type="select"
              onChange={this.handleInputChange}
            >
              <option>Choose...</option>
              {this.state.roles.map(role => (
                <option name="roleId" key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button onClick={this.handleFormSubmit}>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default RoleChangeForm;

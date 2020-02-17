import React, { Component } from 'react';
import userAPI from '../../utils/userAPI';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Portal from '../Portal';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userFirstName: '',
      userId: '',
      userRole: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    userAPI
      .getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // Returns an array containing a single user object
    const targetUser = this.state.users.filter(
      user => user.id === Number(value)
    );

    let user = targetUser[0];

    this.setState({
      userFirstName: user.firstName,
      userId: user.id,
      userRole: user.Role.name
    });
  }

  render() {
    return (
      <Container>
        <h5 id="demo-info" className="text-center">
          This software is set up in DEMO MODE, which will allow you see the
          user interface as it would appear to a user of each role.
        </h5>
        <Form>
          <Form.Group controlId="formGroupSelectUser">
            <Form.Label></Form.Label>
            <Form.Control
              as="select"
              name="user"
              type="select"
              onChange={this.handleInputChange}
            >
              <option>Select User</option>
              {this.state.users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName} (
                  {user.Role.name.toUpperCase()})
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
        <Portal
          userRole={this.state.userRole}
          userId={this.state.userId}
          userFirstName={this.state.userFirstName}
        />
      </Container>
    );
  }
}

export default Welcome;

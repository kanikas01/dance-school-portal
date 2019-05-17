import React, { Component } from "react";
import roleAPI from "../../utils/roleAPI";
import Form from 'react-bootstrap/Form';
import Portal from '../Portal';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      role: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

    console.log(value);
  }

  render () {
    return (
      <div>
        <h5>Hello Welcome Page</h5>
        <Form>
          <Form.Group controlId="formGroupAddSelectRole">
            <Form.Label>Select Role</Form.Label>
              <Form.Control 
                as="select"
                name="role"
                type="select"
                onChange={this.handleInputChange}>
                <option>Choose...</option>
                {this.state.roles.map(role => ( 
                  <option 
                    key={role.id} 
                    value={role.name}>{role.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        <Portal role={this.state.role} />
      </div>
    );
  }
}

export default Welcome;

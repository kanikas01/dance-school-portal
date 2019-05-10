import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import roleAPI from "../../../utils/roleAPI";

class Roles extends Component {

  state = {
    roles: [],
    devNull: ""
  };

  componentDidMount() {
    roleAPI.getRoles()
      .then(res => this.setState ({ roles: res.data }) )
      .catch(err => console.log(err));
  }

  handleDelete = (event, index) => {
    event.preventDefault();
    let role = this.state.roles[index];
    roleAPI.deleteRole(role.id)
      .then(res => {
        this.setState ({ devNull: this.state.roles.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
      <Container>
        <h3>Roles Tab Content</h3>
        <h6>TODO</h6>
        <ul>
          <li>View roles</li>
          <li>Add roles</li>
        </ul>

        {this.state.roles.map((role, index) => (   
          <h6>{role.id} {role.name}</h6>
        ))}

      </Container>
    );
  }
}

export default Roles;
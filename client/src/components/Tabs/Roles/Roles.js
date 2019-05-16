import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import roleAPI from "../../../utils/roleAPI";

class Roles extends Component {

  state = {
    open: false,
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
        <ListGroup>
        {this.state.roles.map((role, index) => (    
          <ListGroup.Item key={role.id}>{role.name}</ListGroup.Item>
        ))}
        </ListGroup>
      </Container>
    );
  }
}

export default Roles;
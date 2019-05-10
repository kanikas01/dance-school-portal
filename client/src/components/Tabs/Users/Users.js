import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import userAPI from "../../../utils/userAPI";


class Users extends Component {

  state = {
    users: [],
    devNull: ""
  };


  componentDidMount() {
    userAPI.getUsersSafe()
      .then(res => this.setState ({ users: res.data }) )
      .catch(err => console.log(err));
  }

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
        <ButtonToolbar>
          <Button>Add User</Button>
          <Button>View/Update Users</Button>
          <Button>Create Safe User Query That Includes Role</Button>
        </ButtonToolbar>

        <ListGroup>
        {this.state.users.map((user, index) => (   
          <ListGroup.Item key={user.id}>{user.id} {user.firstName} {user.lastName} {user.Role.name}</ListGroup.Item>
        ))}
        </ListGroup>

      </Container>
    );
  }
}

export default Users;
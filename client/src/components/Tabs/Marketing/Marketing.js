import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import userAPI from "../../../utils/userAPI";

class Marketing extends Component {

  state = {
    users: []
  };

  componentDidMount() {
    let queryString = "?onMarketingList=1"
    userAPI.searchUsers(queryString)
      .then(res => this.setState ({ users: res.data }) )
      .catch(err => console.log(err));
  }

  render () {
    return (
      <Container>
        <h3>Marketing Tab Content</h3>
        <h6>TODO</h6>
        <ul>
          <li>Get emails for people on marketing list</li>
        </ul>

        <ListGroup>
            {this.state.users.map((user, index) => (   
              <ListGroup.Item key={user.id}>{user.firstName} {user.lastName} {user.email}
              </ListGroup.Item>
            ))}
          </ListGroup>


      </Container>
    );
  }
}

export default Marketing;
import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import Form from "react-bootstrap/Form";
import { Container, Spinner } from "react-bootstrap";
import Portal from "./Portal";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userFirstName: "",
      userId: "",
      userRole: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    userAPI
      .getUsers()
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;

    // Returns an array containing a single user object
    const targetUser = this.state.users.filter(
      (user) => user.id === Number(value)
    );

    let user = targetUser[0];

    this.setState({
      userFirstName: user.firstName,
      userId: user.id,
      userRole: user.Role.name,
    });
  }

  render() {
    let isLoaded = this.state.users;
    let output = "";
    if (isLoaded) {
      output = (
        <div>
          <Container fluid className="p-0">
            <Form className="mx-auto col-6">
              <Form.Group controlId="formGroupSelectUser">
                <Form.Label></Form.Label>
                <Form.Control
                  as="select"
                  name="user"
                  type="select"
                  onChange={this.handleInputChange}
                >
                  <option>Select User</option>
                  {this.state.users.map((user) => (
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
        </div>
      );
    } else {
      output = (
        <Container fluid className="p-0 mt-4 text-center text-white">
          <h5 className="pb-2">
            Give us a moment, just waking up the database...
            <br />
          </h5>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      );
    }

    return <div>{output}</div>;
  }
}

export default Welcome;

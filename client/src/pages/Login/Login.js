import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import userAPI from "../../utils/userAPI";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post("/login", userData)
      .then(function (response) {
        window.location = "/portal"
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        window.location = "/login?failure"
      });
  };

  render() {
    return (
      <Container className="page-content" id="login-form">
        <h2 className="text-center">Login</h2>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
          </Form.Label>
            <Col sm="10">
              <Form.Control
                name="email"
                onChange={this.handleInputChange}
                placeholder="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
          </Form.Label>
            <Col sm="10">
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleFormSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>

      // {/* <form action="/login" method="post">
      //   <div>
      //     <label>Email:</label>
      //     <input type="text" name="email" />
      //   </div>
      //   <div>
      //     <label>Password:</label>
      //     <input type="password" name="password" />
      //   </div>
      //   <div>
      //     <input type="submit" value="Log In" />
      //   </div>
      // </form> */}
    );
  }
}

export default Login;

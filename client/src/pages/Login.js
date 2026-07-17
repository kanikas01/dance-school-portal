import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import userAPI from "../../utils/userAPI";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    axios
      .post('/login', userData)
      .then(function(response) {
        window.location = '/portal';
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
        window.location = '/login?failure';
      });
  };

  render() {
    return (
      <Container className="page-content text-white" id="login-form">
        <h2 className="text-center">Log In to Dance Portal</h2>
        <Form action="/login" method="post">
          <Row>
            <Col>
              <label>Email:</label>
              <input type="text" name="email" />
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <label>Password:</label>
                <input type="password" name="password" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button id="submit-button" variant="primary" type="submit">
                Log In
                {/* <input id="submit-button" type="submit" value="Log In" /> */}
              </Button>
            </Col>
          </Row>
        </Form>

        {/* <h2 className="text-center">Login</h2>
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
        </Form> */}
      </Container>
    );
  }
}

export default Login;

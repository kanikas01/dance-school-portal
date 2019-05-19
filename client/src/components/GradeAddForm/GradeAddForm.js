import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import danceAPI from "../../utils/danceAPI";
import userAPI from "../../utils/userAPI";
import roleAPI from "../../utils/roleAPI";

class GradeAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
      roles: [],
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: "",
      isActive: 1,
      onMarketingList: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);
    this.handleUpdateFormSubmit = this.handleUpdateFormSubmit.bind(this);
  }

  componentDidMount() {
    roleAPI.getRoles()
      .then(res => this.setState ({ roles: res.data }) )
      .then(() => {
        if (this.props.role === "student") {
          let roleInfo = this.state.roles
            .filter(userRole => userRole.name === "student");
          this.setState({
            roleId: roleInfo[0].id
          })
        }
      })
      .catch(err => console.log(err));
  }

  handleAddFormSubmit = (event, index) => {
    event.preventDefault();
    // let user = this.state.users[index];
    userAPI.saveUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      RoleId: this.state.roleId,
      isActive: this.state.isActive,
      onMarketingList: this.state.onMarketingList
    })
      .then(res => alert("User saved!"))
      .catch(err => console.log(err));

      this.handleClearResults();
  };

  handleClearResults = () => {
    this.setState ({ 
      roles: [],
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: "",
      isActive: 1,
      onMarketingList: 1
    });
  };

  render () {
    return (
      <h3>Add Grade Form</h3>
    );
  }
}
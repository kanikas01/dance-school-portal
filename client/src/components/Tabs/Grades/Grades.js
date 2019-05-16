import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Nav from 'react-bootstrap/Nav';
import gradeAPI from "../../../utils/gradeAPI";

class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      devNull: "",
      hideSearchForm: false,
      hideAddForm: true
    };

    this.showSearchForm = this.showSearchForm.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
  }

  componentDidMount() {
    // gradeAPI.getGrades()
    //   .then(res => this.setState ({ grades: res.data }) )
    //   .catch(err => console.log(err));
  }

  showAddForm() {
    this.setState({
      hideAddForm: false,
      hideSearchForm: true
    });
  }

  showSearchForm() {
    this.setState({
      hideAddForm: true,
      hideSearchForm: false
    });
  }

  handleDelete = (event, index) => {
    event.preventDefault();
    let grade = this.state.grades[index];
    gradeAPI.deleteGrade(grade.id)
      .then(res => {
        this.setState ({ devNull: this.state.grades.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render () {
    const addFormStyle = this.state.hideAddForm ? {display: 'none'} : {};
    const searchFormStyle = this.state.hideSearchForm ? {display: 'none'} : {};

    return (
      <Container>
        <Nav variant="pills" defaultActiveKey="search-grades">
          <Nav.Item>
            <Nav.Link
              eventKey="search-grades"
              onClick={this.showSearchForm}>All Grades</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="add-grade"
              onClick={this.showAddForm}>Add Grade</Nav.Link>
          </Nav.Item>
        </Nav>
        
      </Container>
    );
  }
}

export default Grades;
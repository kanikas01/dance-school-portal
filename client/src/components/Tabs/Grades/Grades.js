import React, { Component,  } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import gradeAPI from "../../../utils/gradeAPI";

class Grades extends Component {

  state = {
    grades: [],
    devNull: ""
  };

  componentDidMount() {
    // gradeAPI.getGrades()
    //   .then(res => this.setState ({ grades: res.data }) )
    //   .catch(err => console.log(err));
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
    return (
      <Container>
        <h3>Grades Tab Content</h3>
        <h6>TODO</h6>
        <ButtonToolbar>
          <Button>Search Student Records</Button>
          <Button>Add grade</Button>
          <Button>Update/remove grade</Button>
        </ButtonToolbar>
      </Container>
    );
  }
}

export default Grades;
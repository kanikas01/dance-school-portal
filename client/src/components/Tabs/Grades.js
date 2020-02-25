import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import gradeAPI from "../../utils/gradeAPI";
import GradeAddForm from "../GradeAddForm";

class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      devNull: ""
    };
  }

  componentDidMount() {
    // gradeAPI.getGrades()
    //   .then(res => this.setState ({ grades: res.data }) )
    //   .catch(err => console.log(err));
  }

  handleDelete = (event, index) => {
    event.preventDefault();
    let grade = this.state.grades[index];
    gradeAPI
      .deleteGrade(grade.id)
      .then(res => {
        this.setState({ devNull: this.state.grades.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Tab.Container id="grades-tab-nav" defaultActiveKey="add-grade">
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="add-grade">
                  <h3>Add Grade</h3>
                  <GradeAddForm />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Grades;

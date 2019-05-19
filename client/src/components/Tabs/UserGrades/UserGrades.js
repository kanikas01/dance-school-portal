import React, { Component } from "react";
import gradeAPI from "../../../utils/gradeAPI";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

class UserGrades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    gradeAPI.getGradesForUser(this.props.userId)
    // .then(res => console.log(res.data))
    .then(res => this.setState ({ grades: res.data }) )
    .catch(err => console.log(err));
  }

  render () {
    return (
      <>
        <h3>My Grades</h3>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Dance</th>
              <th>Level</th>
              <th>Score</th>
              <th>Question Type</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.grades.map(grade => (   
              <tr key={grade.id}>
                <td>{grade.date}</td>
                <td>{grade.Dance.name}</td>
                <td>{grade.level}</td>
                <td>{grade.score}</td>
                <td>{grade.questionType}</td>
                <td>{grade.detail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default UserGrades;

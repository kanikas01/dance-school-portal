import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import danceAPI from '../../utils/danceAPI';
import gradeAPI from '../../utils/gradeAPI';
import userAPI from '../../utils/userAPI';

class GradeAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      dances: [],
      userId: '',
      danceId: '',
      date: '',
      level: '',
      questionType: '',
      detail: '',
      score: '',
      comment: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);
  }

  componentDidMount() {
    danceAPI
      .getDances()
      .then(res => this.setState({ dances: res.data }))
      .catch(err => console.log(err));

    let queryString = '?isActive=1';
    userAPI
      .searchUsers(queryString)
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    gradeAPI
      .saveGrade({
        UserId: Number(this.state.userId),
        DanceId: Number(this.state.danceId),
        date: this.state.date,
        level: this.state.level,
        questionType: this.state.questionType,
        detail: this.state.detail,
        score: this.state.score,
        comment: this.state.comment
      })
      .then(res => alert('Grade saved!'))
      .catch(err => console.log(err));

    // this.handleClearResults();
  };

  handleClearResults = () => {
    this.setState({
      userId: '',
      danceId: '',
      date: '',
      level: '',
      questionType: '',
      detail: '',
      score: '',
      comment: ''
    });
  };

  compare = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  render() {
    const dances = this.state.dances.slice();
    dances.sort(this.compare);

    return (
      <>
        <Form>
          {/* SELECT USER */}
          <Form.Group controlId="formGroupAddSelectDance">
            <Form.Label>Select Student</Form.Label>
            <Form.Control
              as="select"
              name="userId"
              type="select"
              onChange={this.handleInputChange}
            >
              <option>Choose...</option>
              {this.state.users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {/* SELECT DANCE */}
          <Form.Group controlId="formGroupAddSelectDance">
            <Form.Label>Select Dance</Form.Label>
            <Form.Control
              as="select"
              name="danceId"
              type="select"
              onChange={this.handleInputChange}
            >
              <option>Choose...</option>
              {dances.map(dance => (
                <option key={dance.id} value={dance.id}>
                  {dance.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          {/* INPUT DATE */}
          <Form.Group controlId="formGroupAddDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              value={this.state.date}
              onChange={this.handleInputChange}
              placeholder=""
            />
          </Form.Group>
          {/* SELECT LEVEL */}
          <Form.Group controlId="formGroupAddSelectLevel">
            <Form.Label>Select Level</Form.Label>
            <Form.Control
              as="select"
              name="level"
              type="select"
              onChange={this.handleInputChange}
            >
              <option>Choose...</option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </Form.Control>
          </Form.Group>
          {/* SELECT QUESTION TYPE */}
          <Form.Group controlId="formGroupAddSelectQuestionType">
            <Form.Label>Select Question Type</Form.Label>
            <Form.Control
              as="select"
              name="questionType"
              type="select"
              onChange={this.handleInputChange}
            >
              <option>Choose...</option>
              <option value="Amalgamation">Amalgamation</option>
              <option value="Theory">Theory</option>
            </Form.Control>
          </Form.Group>
          {/* INPUT DETAIL */}
          <Form.Group controlId="formGroupAddDetail">
            <Form.Label>Detail</Form.Label>
            <Form.Control
              name="detail"
              type="name"
              value={this.state.detail}
              onChange={this.handleInputChange}
              placeholder="Element and figure if theory, role if amalgamation"
            />
          </Form.Group>
          {/* INPUT SCORE */}
          <Form.Group controlId="formGroupAddScore">
            <Form.Label>Score</Form.Label>
            <Form.Control
              name="score"
              type="score"
              value={this.state.score}
              onChange={this.handleInputChange}
              placeholder="0 to 4 (e.g., 3.5, 2.75)"
            />
          </Form.Group>
          {/* INPUT COMMENT */}
          <Form.Group controlId="formGroupAddComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              name="comment"
              type="comment"
              value={this.state.comment}
              onChange={this.handleInputChange}
              placeholder="Add feedback for dancer"
            />
          </Form.Group>
          <Form.Group>
            <Button onClick={this.handleAddFormSubmit}>Submit</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default GradeAddForm;

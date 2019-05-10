import React, { Component,  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import danceAPI from "../../../utils/danceAPI";

class Dances extends Component {

  state = {
    dances: [],
    devNull: ""
  };

  componentDidMount() {
    danceAPI.getDances()
      .then(res => this.setState ({ dances: res.data }) )
      .catch(err => console.log(err));
  }

  handleDelete = (event, index) => {
    event.preventDefault();
    let dance = this.state.dances[index];
    danceAPI.deleteDance(dance.id)
      .then(res => {
        this.setState ({ devNull: this.state.dances.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
      <Container>
        <h3>Dances Tab Content</h3>
        <h6>TODO</h6>
        <ul>
          <li>See all dances</li>
          <li>Add dance</li>
          <li>Update dance</li>
          <li>Delete dance (if no one has a grade in it)</li>
        </ul>

        {this.state.dances.map((dance, index) => (   
          <h6>{dance.id} {dance.name} {dance.quarter}</h6>
        ))}

      </Container>
    );
  }
}

export default Dances;
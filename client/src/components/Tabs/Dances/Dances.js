import React, { Component,  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup'
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

    const dances = [...this.state.dances]
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

        <ListGroup>
        {dances.map((dance, index) => (   
          <ListGroup.Item key={dance.id}>{dance.id} {dance.name} {dance.quarter}</ListGroup.Item>
        ))}
        </ListGroup>

      </Container>
    );
  }
}

export default Dances;

// sort((a, b) => {
//   let nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase();
//   if (nameA < nameB) //sort string ascending
//       return -1;
//   if (nameA > nameB)
//       return 1;
//   return 0;
// })
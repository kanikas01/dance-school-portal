import React, { Component,  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import danceAPI from "../../../utils/danceAPI";

class Dances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dances: [],
      devNull: "",
      hideSearchForm: false,
      hideAddForm: true
    };

    this.showSearchForm = this.showSearchForm.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
  }

  componentDidMount() {
    danceAPI.getDances()
      .then(res => this.setState ({ dances: res.data }) )
      .catch(err => console.log(err));
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
    let dance = this.state.dances[index];
    danceAPI.deleteDance(dance.id)
      .then(res => {
        this.setState ({ devNull: this.state.dances.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render () {
    const addFormStyle = this.state.hideAddForm ? {display: 'none'} : {};
    const searchFormStyle = this.state.hideSearchForm ? {display: 'none'} : {};

    const dances = [...this.state.dances]
    return (
      <Container>
        <Nav variant="pills" defaultActiveKey="search-dances">
          <Nav.Item>
            <Nav.Link
              eventKey="search-dances"
              onClick={this.showSearchForm}>All Dances</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="add-dance"
              onClick={this.showAddForm}>Add Dance</Nav.Link>
          </Nav.Item>
        </Nav>

        <div style={searchFormStyle}>
          <h3>All Dances</h3>
          <ListGroup>
            {dances.map((dance, index) => (   
              <ListGroup.Item key={dance.id}>{dance.name} ({dance.quarter})
                <Button>View/Update</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div style={addFormStyle}>
          <h3>Add Dance</h3>
          {/* <UserAddUpdateForm /> */}
        </div>

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
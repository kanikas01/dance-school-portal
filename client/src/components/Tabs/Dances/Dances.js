import React, { Component,  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import danceAPI from "../../../utils/danceAPI";

class Dances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dances: []
    };
  }

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
        <Tab.Container id="dances-tab-nav" defaultActiveKey="view-dances">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="view-dances">View Dances</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="add-dance">Add Dance</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="view-dances">
                  <ListGroup>
                    {this.state.dances.map((dance, index) => (   
                      <ListGroup.Item key={dance.id}>{dance.name} ({dance.quarter})
                        <Button>View/Update</Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="add-dance">
                  <h1>Add Dance</h1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Dances;

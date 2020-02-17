import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import danceAPI from '../../../utils/danceAPI';

class Dances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dances: []
    };
  }

  componentDidMount() {
    danceAPI
      .getDances()
      .then(res => this.setState({ dances: res.data }))
      .catch(err => console.log(err));
  }

  handleDelete = (event, index) => {
    event.preventDefault();
    let dance = this.state.dances[index];
    danceAPI
      .deleteDance(dance.id)
      .then(res => {
        this.setState({ devNull: this.state.dances.splice(index, 1) });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Tab.Container id="dances-tab-nav" defaultActiveKey="view-dances">
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="view-dances">
                  <h3>View Dances</h3>
                  <Table bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quarter</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.dances.map((dance, index) => (
                        <tr key={dance.id}>
                          <td>{dance.id}</td>
                          <td>{dance.name}</td>
                          <td>{dance.quarter}</td>
                          {/* <td><Button>View</Button></td> */}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="add-dance">
                  <h3>Add Dance</h3>
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Dances;

import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import { Container, Row, Col } from 'react-bootstrap';

class Portal extends Component {
  render () {
    let userRole = this.props.userRole;
    let userId = this.props.userId;
    let userFirstName = this.props.userFirstName;

    return (
      <Container className="page-content">
        {userFirstName && <h4>Welcome, {userFirstName}</h4> }
        <Navigation 
          role={userRole}
          userId={userId}
          userName={userFirstName}/>
      </Container>
    );
  }
}

export default Portal;

import React from 'react';
import Navigation from '../../components/Navigation';
import { Container } from 'react-bootstrap';

function Portal(props) {
  return (
    <Container className="page-content">
      {props.userFirstName && <h4>Welcome, {props.userFirstName}</h4>}
      <Navigation role={props.userRole} userId={props.userId} />
    </Container>
  );
}

export default Portal;

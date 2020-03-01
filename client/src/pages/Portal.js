import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

function Portal(props) {
  return (
    <Container className={"page-content bg-light rounded-lg mb-2"}>
      {props.userFirstName && (
        <div className="mt-3 mb-3">
          <h3 className="text-left">Welcome, {props.userFirstName}</h3>
        </div>
      )}
      <Navigation role={props.userRole} userId={props.userId} />
    </Container>
  );
}

export default Portal;

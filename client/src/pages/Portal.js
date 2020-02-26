import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

function Portal(props) {
  return (
    <Container
      className={`page-content bg-light rounded-lg mb-2 ${props.userId &&
        "border border-primary"}`}
    >
      {props.userFirstName && (
        <h3 className="pt-2 pb-2 text-left">Welcome, {props.userFirstName}</h3>
      )}
      <Navigation role={props.userRole} userId={props.userId} />
    </Container>
  );
}

export default Portal;

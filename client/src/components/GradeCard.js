import React from "react";
import { Card } from "react-bootstrap";

function GradeCard({ grade }) {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>
          {grade.level} {grade.Dance.name}
        </Card.Title>
        <Card.Text className="text-left">
          Date: {grade.date}
          <br />
          {grade.questionType}: {grade.detail}
          <br />
          Grade: {grade.score}
          <br />
          Comments: {grade.comment}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GradeCard;

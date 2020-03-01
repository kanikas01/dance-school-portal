import React from "react";
import gradeAPI from "../../utils/gradeAPI";
import GradeCard from "../GradeCard";
import { Container } from "react-bootstrap";

function UserGrades({ userId }) {
  const [grades, setGrades] = React.useState([]);
  const [fetchComplete, setFetchComplete] = React.useState(false);

  React.useEffect(() => {
    gradeAPI
      .getGradesForUser(userId)
      .then(res => {
        setGrades(res.data);
        setFetchComplete(true);
      })
      .catch(err => console.log(err));
  }, [userId]);

  if (grades.length > 0) {
    return (
      <Container className="mt-3">
        <h3>Grades</h3>
        {grades.map(grade => (
          <GradeCard key={grade.id} grade={grade} />
        ))}
      </Container>
    );
  } else if (fetchComplete) {
    return (
      <Container className="mt-3">
        <h3>No Grades Found</h3>
      </Container>
    );
  } else {
    return null;
  }
}

export default UserGrades;

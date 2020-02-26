import React from "react";
import gradeAPI from "../../utils/gradeAPI";
import Table from "react-bootstrap/Table";

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
      <>
        <h3>Grades</h3>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Grade Info</th>
            </tr>
          </thead>
          <tbody>
            {grades.map(grade => (
              <tr key={grade.id}>
                {grade.date}
                <br />
                {grade.Dance.name}
                <br />
                {grade.level}
                <br />
                {grade.score}
                <br />
                {grade.questionType}
                <br />
                {grade.detail}
                <br />
                {grade.comment}
                <br />
                <hr />
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  } else if (fetchComplete) {
    return (
      <>
        <h3>No Grades Found</h3>
      </>
    );
  } else {
    return null;
  }
}

export default UserGrades;

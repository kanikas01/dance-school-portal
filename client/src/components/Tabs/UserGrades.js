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
              <th>Date</th>
              <th>Dance</th>
              <th>Level</th>
              <th>Score</th>
              <th>Question Type</th>
              <th>Detail</th>
              {/* <th>Comments</th> */}
            </tr>
          </thead>
          <tbody>
            {grades.map(grade => (
              <tr key={grade.id}>
                <td>{grade.date}</td>
                <td>{grade.Dance.name}</td>
                <td>{grade.level}</td>
                <td>{grade.score}</td>
                <td>{grade.questionType}</td>
                <td>{grade.detail}</td>
                {/* <td>{grade.comment}</td> */}
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

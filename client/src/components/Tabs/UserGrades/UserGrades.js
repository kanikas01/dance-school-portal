import React from 'react';
import gradeAPI from '../../../utils/gradeAPI';
import Table from 'react-bootstrap/Table';

function UserGrades({ userId }) {
  const [grades, setGrades] = React.useState([]);

  React.useEffect(() => {
    gradeAPI
      .getGradesForUser(userId)
      .then(res => setGrades(res.data))
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <>
      {grades.length > 0 ? (
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
      ) : (
        <>
          <h3>No Grades Found</h3>
        </>
      )}
    </>
  );
}

export default UserGrades;

import React from "react";
import gradeAPI from "../../utils/gradeAPI";
import Table from "react-bootstrap/Table";
import GradeCard from "../GradeCard";

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
      <div className="mb-4">
        <h3 className="mt-3">Grades</h3>
        {grades.map(grade => (
          <GradeCard key={grade.id} grade={grade} />
        ))}
      </div>
    );
  } else if (fetchComplete) {
    return (
      <>
        <h3 className="mt-3">No Grades Found</h3>
      </>
    );
  } else {
    return null;
  }
}

export default UserGrades;

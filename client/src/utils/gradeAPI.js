import axios from "axios";

export default {
  // Gets all grades
  getGrades: function() {
    return axios.get("/api/grades");
  },
  // Gets all grades for a specific user
  getGradesForUser: function(id) {
    return axios.get("/api/grades/" + id);
  },
  // Saves a role to the database
  saveGrade: function(gradeData) {
    return axios.post("/api/grades", gradeData);
  },
  // Deletes the role with the given id
  deleteGrade: function(id) {
    return axios.delete("/api/grades/" + id);
  }
};

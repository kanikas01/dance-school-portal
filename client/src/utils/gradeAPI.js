import axios from "axios";

export default {
  // Gets all grades
  getGrades: function() {
    return axios.get("/api/grades");
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

import axios from "axios";

export default {
  // Gets all users
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets all users minus password and plus role
  getUsersSafe: function() {
    return axios.get("/api/users/safe");
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  }
};

import axios from "axios";

export default {
  // Gets a single user
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Search users (no params returns all users)
  searchUsers: function(query) {
    return axios.get("/api/users/search" + query);
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

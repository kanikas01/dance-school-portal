import axios from "axios";

export default {
  // Gets all roles
  getRoles: function() {
    return axios.get("/api/roles");
  },
  // Saves a role to the database
  saveRole: function(roleData) {
    return axios.post("/api/roles", roleData);
  },
  // Deletes the role with the given id
  deleteRole: function(id) {
    return axios.delete("/api/roles/" + id);
  }
};

import axios from "axios";

export default {
  // Gets all dances
  getDances: function() {
    return axios.get("/api/dances");
  },
  // Saves a dance to the database
  saveDance: function(danceData) {
    return axios.post("/api/dances", danceData);
  },
  // Deletes the dance with the given id,
  // provided there are no grades associated with it
  deleteDance: function(id) {
    return axios.delete("/api/dances/" + id);
  }
};

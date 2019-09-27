const axios = require("axios"); // Queries api

export default {
  findAllPlants: () => {
    console.log("api.findAllPlants()");
    return axios.get("/plantly-explore");
  },

  searchPlants: term => {
    console.log("api.searchPlants(" + term + ")");
    return axios.get("/plantly-search/" + term);
  },

  // Saves a plant to the database
  savePlant: function(plantData) {
    return axios.post("/submit", plantData);
  },
};

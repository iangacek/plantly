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
  savePlant: (plantData) =>{
    console.log("savePlant hit!")
    return axios.post("/submit", plantData);
  },

  // deletePlant: 

};

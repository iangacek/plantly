const axios = require("axios"); // Queries api

export default {

    findAllPlants: () => {
        console.log('api.findAllPlants()')
        return axios.get("/plantly-explore")
    },

    searchPlants: (term) => {
        console.log('api.searchPlants(' + term + ")")
        return axios.get("/plantly-search/" + term)
    },

    addToGarden: (id) => {
        console.log("plant-console log", id)
        return axios.post("/plantly-addToGarden", id)
    },

    // Saves a plant to the database
    savePlant: (plantData) => {
        console.log("savePlant hit!")
        return axios.post("/submit", plantData);
    },

    findByUser: (userName) => {
        console.log(userName, "API GARDEN CALL")
        return axios.get("/myGarden/" + userName);
    }

    // // deletePlant: 
    // deletePlant: () =>{
    //   console.log("deletePlant hit!")
    // }
};



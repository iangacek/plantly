const axios = require("axios"); // Queries api

export default {

    findAllPlants: () => {
        console.log('api.findAllPlants()')
        return axios.get("/plantly-explore")
    },

    searchPlants: (term) => {
        return axios.get("/plantly-search/" + term)
    },

    addToGarden: (id) => {
        console.log("plant-console log", id.props.plant)
        return axios.post("/plantly-addToGarden", id.props.plant)
    },

    // Saves a plant to the database
    savePlant: (plantData) => {
        console.log("savePlant hit!")
        return axios.post("/submit", plantData);
    },

    // // deletePlant: 
    // deletePlant: () =>{
    //   console.log("deletePlant hit!")
    // }
};



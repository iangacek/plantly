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
        console.log('api.addToGarden(' + id + ")")
        return axios.create("/api/books/" + id);
    }
};
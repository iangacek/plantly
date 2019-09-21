const axios = require("axios"); // Queries api

export default {

    findAllPlants: () => {
        console.log('api.findallPlants()')
        return axios.get("/plantly-explore")
    },

    searchPlants: (term) => {
        console.log('api.searchPlants(' + term + ")")
        return axios.get("/plantly-search/" + term)
    }
};
  




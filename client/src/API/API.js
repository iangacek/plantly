const axios = require("axios"); // Queries api

export default {

    findAllPlants: () => {
        return axios.get("/plantly-explore")
    },

    searchPlants: (term) => {
        return axios.get("/plantly-search/" + term)
    }
};
  




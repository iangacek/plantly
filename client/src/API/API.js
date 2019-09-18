const axios = require("axios");

// API plant search request
export default {
    searchById: (id) => {
        return axios.get(`/ID-search/${id}`)
    },

    searchPlants: (term) => {
        return axios.get("/API-search/" + term)
    }
};
  
  // API ID search




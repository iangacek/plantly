const axios = require("axios");

export default {
    searchById: (id) => {
        return axios.get(`/ID-search/${id}`)
    },

    searchPlants: (term) => {
        return axios.get("/API-search/" + term)
    }
};
  




import React from "react";
import API from "../../API/API";
import PlantData from "../../API/plantlyApi.json"
import PlantCard from "../Plant Card/PlantCard"
const axios = require("axios");

class Search extends React.Component{
  state = {
    searchTerm: "",
    plants: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//   searchPlantly = (searchTerm) => { 
//     axios.get('../../API/plantlyApi.json') // JSON File Path
//   .then( response => {
//     this.setState({
//     plants: response.data
//   });
//   console.log(this.plants.state)
// })
// .catch(function (error) {
//   console.log(error);
// });
// }
//   };

  // TREFLE SEARCH
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(API);
    API.searchPlants(this.state.searchTerm).then(data => {
      return API.searchById(data.data[0].id)
    }).then(data => {
      this.setState({plants:data});
      console.log(data);
    })
    this.setState({
      searchTerm: "",
    });
  };


  // displayPlants = () => {
  //   console.log(this.state.plants);
  //   if(this.state.plants.data === undefined){
  //     return null;
  //   }
  //   return this.state.plants.data.items.map(plants => {
  //     return ;
  //   })
  // };

  render() {
    return ( 
      <div className="search-container">
        <h1>Plant Search</h1>
        <form className="form">
        <input 
          name="searchTerm"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="i.e. monstera deliciosa"
          ></input>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>

        {/* {this.displayPlants()} */}
        
        {PlantData.map((plant, index)=>{
          return (
            <div>
            <h1>{plant.commonName}</h1>;
            <h3>{plant.scientificName}</h3>;
            <p>Lighting Requirements:{plant.light}</p>;
            <p>Watering:{plant.water}</p>;
            <p>Soil Preferences:{plant.soil}</p>;
            <p>Propagation:{plant.propagation}</p>;
            <p>Fertilizing:{plant.fertilizer}</p>;
            <p>Pet Toxicity:{plant.petToxicity}</p>;
            </div>
         )
          })} 
      </div>
    );
  }
}

export default Search;

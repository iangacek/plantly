import React from "react";
import API from "../../API/API.js"; 
import PlantCard from "../Plant Card/PlantCard.js";
class Explore extends React.Component {
  state = {
    plants: [],
  };

  componentDidMount() {
    API.findAllPlants().then(plants =>
      this.setState({
        plants: plants.data
      })
    );
  }

  render() {
    console.log(this.state.plants)
    return (
      <div className="explore-container">
        <h1>Explore new plants</h1>
        <div>
          {this.state.plants.map( plant => <PlantCard plant = {plant}/>)}
        </div>
      </div>
    );
  }
}

export default Explore;

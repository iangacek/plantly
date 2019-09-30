import React, { Component } from "react";
import API from "../../API/API.js";

class PlantCard extends Component {


  render() {
    const { plant, addGarden  } = this.props;
    return (
      <div className="plantCard">

        <div>
          <h1>{plant.commonName}</h1>
          <h3>{plant.scientificName}</h3>
          <p><b>Lighting Requirements:</b> {plant.light}</p>
          <p><b>Watering:</b> {plant.water}</p>
          <p><b>Soil Preferences:</b> {plant.soil}</p>
          <p><b>Propagation:</b> {plant.propagation}</p>
          <p><b>Fertilizing:</b> {plant.fertilizer}</p>
          <p><b>Pet Toxicity:</b> {plant.petToxicity}</p>
          <img src={plant.img} class="auth-image" alt={plant.commonName}></img>

          <button onClick={addGarden(plant.commonName)}>Add to My Garden</button>
        </div>
      </div>
      
    );
  }

  formSubmit = event => {
    event.preventDefault();
    API.addToGarden(this);
  };
}

export default PlantCard;

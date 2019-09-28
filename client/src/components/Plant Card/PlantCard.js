import React, { Component } from "react";
import API from "../../API/API.js";

class PlantCard extends Component {
  render() {
    const { plant } = this.props;
    return (
      <div className="plantCard">
        <div>
          <h1>{plant.commonName}</h1>
          <h3>{plant.scientificName}</h3>
          <p>Lighting Requirements:{plant.light}</p>
          <p>Watering:{plant.water}</p>
          <p>Soil Preferences:{plant.soil}</p>
          <p>Propagation:{plant.propagation}</p>
          <p>Fertilizing:{plant.fertilizer}</p>
          <p>Pet Toxicity:{plant.petToxicity}</p>
          <img src={plant.img} alt={plant.commonName}></img>
          <button onClick={this.formSubmit}>Add to My Garden</button>
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

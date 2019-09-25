import React, { Component } from "react";

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
          <button onClick={this.formSubmit}>Submit</button>
        </div>
      </div>
    );
  }

  formSubmit = event => {
    event.preventDefault();
    API.searchPlants(this.state.searchTerm).then(plantData =>
      this.setState({
        plants: plantData.data,
      })
    );
  };
}

export default PlantCard;

import React, { Component } from "react";
import API from "../../API/API.js";

class PlantCard extends Component {

  render() {
    const { plant, userName, showButton} = this.props;
    console.log(this.props, "props");

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
          <img src={plant.img} className="auth-image" alt={plant.commonName}></img>

          <button onClick={this.formSubmit}>Add to My Garden</button>
        {/* {showButton && <button onClick={this.deleteSubmit}>Delete from My Garden</button>} */}
        {/* //the delete button above needs to call the delete function from somewhere  */}

        </div>
      </div>
      
    );
  }

  // deleteSubmit =  event => {
  //   event.preventDefault();
  //   API.deletePlant(this.props);
  //   console.log("delete hit")
  // };

  formSubmit = event => {
    
    event.preventDefault();
    API.addToGarden(this.props);
    // console.log("this", this.props);
  };
}

export default PlantCard;

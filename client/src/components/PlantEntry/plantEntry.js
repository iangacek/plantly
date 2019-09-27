import React, { Component } from "react";
import API from "../../API";

class PlantEntry extends Component {
  render() {

    // When the form is submitted, use the API.savePlant method to save the plant data
    // Then reload plant from the database
    handleFormSubmit = event => {
      event.preventDefault();
      API.savePlant({
        commonName: this.commonName,
        scientificName: this.scientificName,
        propagation: this.propagation,
        light: this.light,
        soil: this.soil,
        water: this.water,
        fertilizer: this.fertilizer,
        petToxicity: this.petToxicity,
        img: this.img,
      })
        .then(console.log(res))
        .catch(err => console.log(err));
    };

    return (
      <form id="userInput" onsubmit = "handleFormSubmit()">
        <input type="text" id="commonName" placeholder="Common Name" required />
        <br />
        <input
          type="text"
          id="scientificName"
          placeholder="Scientific Name"
          required
        />
        <br />
        <input type="text" id="light" placeholder="Lighting Requirements" />
        <br />
        <input type="text" id="water" placeholder="Watering Requirements" />
        <br />
        <input type="text" id="soil" placeholder="Soil Preferences" />
        <br />
        <input type="text" id="propagation" placeholder="Propagation" />
        <br />
        <input type="text" id="fertilizer" placeholder="Fertilizing" />
        <br />
        <input type="text" id="img" placeholder="Upload Image URL" />
        <br />
        <input type="text" id="petToxicity" placeholder="Pet Toxicity" />
        <br />
        <button type="submit" id="addPlant">
          Add New Plant
        </button>
      </form>
    );
  }
}

export default PlantEntry;

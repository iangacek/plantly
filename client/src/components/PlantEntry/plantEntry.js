import React, { Component } from "react";
import API from "../../API/API";

class PlantEntry extends Component {
  state = {
    commonName: "",
    scientificName: "",
    propagation: "",
    light: "",
    soil: "",
    water: "",
    fertilizer: "",
    petToxicity: "",
    img: "",
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { id, value } = event.target;
    console.log(id, value);
    this.setState({
      [id]: value,
    });
  };

  // When the form is submitted, use the API.savePlant method to save the plant data
  // Then reload plant from the database
  handleFormSubmit = event => {
    event.preventDefault();
    API.savePlant(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form>
        <input
          type="text"
          id="commonName"
          placeholder="Common Name"
          onChange={this.handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          id="scientificName"
          placeholder="Scientific Name"
          onChange={this.handleInputChange}
          required
        />
        <br />
        <input
          type="text"
          id="light"
          placeholder="Lighting Requirements"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          id="water"
          placeholder="Watering Requirements"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          id="soil"
          placeholder="Soil Preferences"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          id="propagation"
          placeholder="Propagation"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          id="fertilizer"
          placeholder="Fertilizing"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          id="img"
          placeholder="Upload Image URL"
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          id="petToxicity"
          placeholder="Pet Toxicity"
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit" id="addPlant" onClick = {this.handleFormSubmit}>
          Add New Plant
        </button>
      </form>
    );
  }
}

export default PlantEntry;

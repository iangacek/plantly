import React from "react";


class PlantEntry extends Component {
  render() {
    <form id="userInput">
      <input type="text" id="commonName" placeholder="Common Name" />
      <br />
      <input type="text" id="scientificName" placeholder="Scientific Name" />
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
      <input type="checkbox" id="petToxicity" placeholder="Pet Toxicity" />
      <br />
      <button type="submit" id="addPlant">
        Add New Plant
      </button>
    </form>;
  }
}

export default PlantEntry;
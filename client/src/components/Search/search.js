import React from "react";
import API from "../../API/API.js";
import PlantCard from "../Plant Card/PlantCard";

// Plant-form submit button
class Search extends React.Component {
  state = {
    searchTerm: "",
    plants: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      name: value,
    });
  };

  formSubmit = event => {
    event.preventDefault();
    API.searchPlants(this.state.searchTerm).then(plantData =>
      this.setState({
        plants: plantData.data,
      })
    );
  };

  displayPlants = () => {
    console.log(this.state.plants);
  };

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
            placeholder="i.e. spider plant"
          ></input>
          <button onClick={this.formSubmit}>Submit</button>
        </form>

        {this.state.plants.map(plant => (
          <PlantCard plant={plant} />
        ))}

      </div>
    );
  }
}

export default Search;

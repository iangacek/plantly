import React from "react";
import API from "../../API/API.js";
import PlantCard from "../Plant Card/PlantCard";

class Search extends React.Component {
  state = {
    username: "",
    searchTerm: "",
    plants: []
  };

  componentWillMount= () => {
    console.log(this.props.username);
    this.setState({username: this.props.username});
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
    console.log(this.state.username, "username");
    return (
      <div className="search-container">
        <h6>Plant Search</h6>
        <form className="form">
          <input
            name="searchTerm"
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
            placeholder="i.e. snake plant"
          ></input>
          <button onClick={this.formSubmit}>Submit</button>
        </form>
        <div className="explore-container">
        {this.state.plants.map(plant => (
          <PlantCard plant={plant} userName={this.state.username} showAddButton={true}/>
        ))}
      </div>
      </div>
    );
  }
}

export default Search;

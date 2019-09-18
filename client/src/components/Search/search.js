import React from "react";
import API from "../../API/API";

class Search extends React.Component{
  state = {
    searchTerm: "",
    plants: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(API);
    API.searchPlants(this.state.searchTerm).then(data => {
      return API.searchById(data.data[0].id)
    }).then(data => {
      this.setState({plants:data});
      console.log(data);
    })
    this.setState({
      searchTerm: "",
    });
  };

  // displayPlants = () => {
  //   console.log(this.state.plants);
  //   if(this.state.plants.data === undefined){
  //     return null;
  //   }
  //   return this.state.plants.data.items.map(plants => {
  //     return ;
  //   })
  // };

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
          placeholder="i.e. monstera deliciosa"
          ></input>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;

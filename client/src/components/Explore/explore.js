import React from "react";
import API from "../../API/API.js"; 
import PlantCard from "../Plant Card/PlantCard.js";
class Explore extends React.Component {
  state = {
    plants: [],
    username: ''
  };

  componentDidMount() {
    API.findAllPlants().then(plants =>
      {
        console.log('api returned ', plants);
        this.setState({
          plants: plants.data,
          username: this.props.username
        })
      }
      
    ).catch((err) => {
      console.log("api error", err) 
    })
  }

  render() {
    console.log(this.state.plants)
    console.log(this.state.username)
    return (
      <div className="explore-container">
        <h5>Explore new plants</h5>
          {this.state.plants.map( plant => <PlantCard plant = {plant} userName={this.state.username}/>)}
          </div>
     );
  }
}

export default Explore;

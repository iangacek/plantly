import React, {Component} from "react";

class PlantCard extends Component {
    render () {
        const {plant}= this.props;
    return (
        <div className="card">
            <div>
            <h1>{plant.commonName}</h1>;
            <h3>{plant.scientificName}</h3>;
            <p>Lighting Requirements:{plant.light}</p>;
            <p>Watering:{plant.water}</p>;
            <p>Soil Preferences:{plant.soil}</p>;
            <p>Propagation:{plant.propagation}</p>;
            <p>Fertilizing:{plant.fertilizer}</p>;
            <p>Pet Toxicity:{plant.petToxicity}</p>;
       <deleteButton />
            </div>
        </div>
    )
}
}


export default PlantCard;
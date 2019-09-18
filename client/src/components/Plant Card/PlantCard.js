import React from "react";

function PlantCard(props) {
  return (
    <div className="card">
      <div>
        <h1>{props.commonName}</h1>
        <h3>{props.scientificName}</h3>
        <img href={props.image} alt={props.name}></img>
        <p>Light:{props.lightRequirements}</p>
        <p>Watering:{props.wateringRequirements}</p>
        <p>Soil:{props.soilPreference}</p>
        <p>Fertilizing:{props.fertilizer}</p>
        <p>Pet Toxicity:{props.petToxicity}</p>
       <deleteButton/>
      </div>
    </div>
  );
}

export default PlantCard;
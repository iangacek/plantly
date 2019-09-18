import React from "react";

function PlantCard(props) {
  return (
    <div className="card">
      <div>
        <h1>{props.name}</h1>
        <h3>{props.author}</h3>
        <img href={props.image} alt={props.name}></img>
        <p>{props.description}</p>
        <deleteButton/>
      </div>
    </div>
  );
}

export default Card;
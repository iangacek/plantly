import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../API/API.js";
import PlantCard from "../Plant Card/PlantCard.js";

const MyGarden = (props) => {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    API.findByUser(props.userName).then(user => {
      // console.log('api returned ', user);
      setPlants(user);
    }

    ).catch((err) => {
      console.log("api error", err)
    })
  }, [props.userName]);

  console.log(plants.data);
  return (
    <div className="myGarden">
      <h1>My Garden</h1>
      <h2>Your dashboard for virtual plant management</h2>

      {plants.data ? plants.data.map((plant, i) => <PlantCard id={plants.data[i]._id} plant={plant.plant} showDeleteButton={true} showAddButton={false} /> ) : null}

      {/* Add plant to plantdb collection */}
      {/* <button class = "addPlant">Add New Plant</button> */}
      <Link to={"/myGarden/plantEntry"}>Add a New Plant</Link>
    </div>
  );
}

export default MyGarden;

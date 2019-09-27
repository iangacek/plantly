import React from "react";

function MyGarden() {
  return (
    <div>
      <h1>My Garden</h1>
      <h2>Your dashboard for virtual plant management</h2>
      <div>
        <p>PLANT CARDS WILL POPULATE HERE</p>
      </div>
      {/* Add plant to plantdb collection */}
      <button class = "addPlant">Add New Plant</button>
    </div>
  );
}

export default MyGarden;

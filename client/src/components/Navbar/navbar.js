import React from "react";
import {Link} from "react-router-dom";
import "../../index.css"


function Navbar (){
  return (
    <nav class ="navbar">
      <ul class = "nav">
        <h1 class ="title">
          <p>plantly</p>
        </h1>
        <li class = "list">
            <Link to={"/explore"}>Explore</Link>
        </li>
        <li class = "list">
            <Link to={"/myGarden"}>My Garden</Link>
        </li>
        <li class = "list">
            <Link to={"/search"}>Search</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
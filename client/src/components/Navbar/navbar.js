import React from "react";
import {Link} from "react-router-dom";
import "../../index.css"


function Navbar (){
  return (
    <nav className="navbar">
      <ul className = "nav">
        <h1 className ="title">
          <p>Plantly</p>
        </h1>
        <li className = "list">
            <Link to={"/explore"}>Explore</Link>
        </li>
        <li className = "list">
            <Link to={"/myGarden"}>My Garden</Link>
        </li>
        <li className = "list">
            <Link to={"/search"}>Search</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
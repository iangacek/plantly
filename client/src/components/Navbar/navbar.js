import React from "react";
import {Link} from "react-router-dom";
import "../../index.css"

function Navbar (){
  return (
    <div>
    <nav className ="navbar">
      <ul className = "nav">
        <h1 className ="title">
          <p>plantly</p>
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
    </div>
  );
}

export default Navbar;

//   <header class="header">
//   <a href="/" class="logo">AGT</a>
// <input class="menu-btn" type="checkbox" id="menu-btn" />
// <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
//   <ul class="menu">
//     <li><a href="#work">Our Work</a></li>
//     <li><a href="#about">About</a></li>
//     <li><a href="#careers">Careers</a></li>
//     <li><a href="#contact">Contact</a></li>
//   </ul>
// </header>
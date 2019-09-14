import React from "react";

function Search() {
    return (
      <div id="search-container">
        <h1>Search for a plant</h1>
        <form>
            <input 
            name="title"
            type="text"
            placeholder="enter a plant name"
            ></input>
            <button>Search</button>
        </form>
      </div>
    );
  }

  export default Search;
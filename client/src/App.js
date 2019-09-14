import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/navbar"; 
import Explore from "./components/Explore/explore"; 
import Search from "./components/Search/search"; 
import myGarden from "./components/MyGarden/myGarden"; 
import "./App.css";

class App extends Component {

  render() {
    return (
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/explore" component={Explore}/>
              <Route exact path="/search" component={Search} />
              <Route exact path="/myGarden" component={myGarden} />
            </Switch>
        </Router>
    );
  }
}

export default App;

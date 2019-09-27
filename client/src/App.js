import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/navbar"; 
import Explore from "./components/Explore/explore"; 
import Search from "./components/Search/search";
import Home from "./components/Home/home";
import myGarden from "./components/MyGarden/myGarden";
import PlantEntry from "./components/MyGarden/plantEntry";

class App extends Component {

  render() {
    return (
        <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/myGarden" component={myGarden} />
              <Route exact path="/myGarden/plantEntry" component={PlantEntry} />
            </Switch>
        </Router>
    );
  }
}

export default App;

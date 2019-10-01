import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios'
// import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/navbar";
import Explore from "./components/Explore/explore";
import Search from "./components/Search/search";
import Home from "./components/Home/home";
import MyGarden from "./components/MyGarden/myGarden";
import PlantEntry from "./components/PlantEntry/plantEntry";
import Signup from './components/sign-up/sign-up';
import LoginForm from './components/login-form/login-form';

class App extends Component {
 constructor() {
   super()
   this.state = {
     loggedIn: false,
     username: null
   }
   this.getUser = this.getUser.bind(this)
   this.componentDidMount = this.componentDidMount.bind(this)
   this.updateUser = this.updateUser.bind(this)
 }
 componentDidMount() {
   this.getUser()
 }
 updateUser (userObject) {
   this.setState(userObject)
 }
 getUser() {
   axios.get('/user/').then(response => {
     console.log('Get user response: ')
     console.log(response.data)
     if (response.data.user) {
       console.log('Get User: There is a user saved in the server session: ')
       this.setState({
         loggedIn: true,
         username: response.data.user.username
       })
     } else {
       console.log('Get user: no user');
       this.setState({
         loggedIn: false,
         username: null
       })
     }
   })
 };
 render() {
   console.log(this.state.username)
   return (
     <div>
       <Router>
       <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
       {!this.state.loggedIn ?
       // if user not logged in,  force login
       (<Switch>
         <Route
         path="/signup"
         render={() =>
           <Signup/>}
         />
         <Route  //no path on this route means it is a catch-all
         render={() =>
             <LoginForm
             updateUser={this.updateUser}
             />
           }
           />
       </Switch>)
       :
         <Switch>
           <Route exact path="/signup" render={() => {return <Home username={this.state.username}/>}}/>
           <Route exact path="/explore" render={() => {return <Explore username={this.state.username}/>}}/>
           <Route exact path="/search" render={() => {return <Search username={this.state.username}/>}}/>
           <Route exact path="/myGarden" render={() => {return <MyGarden userName={this.state.username}/>}}/>
           <Route exact path="/myGarden/plantEntry" render={() => {return <PlantEntry username={this.state.username}/>}}/>
         </Switch>
       }
     </Router>
     </div>
   );
}
}
export default App;
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios'
// import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/navbar";
import Explore from "./components/Explore/explore";
import Search from "./components/Search/search";
import Home from "./components/Home/home";
import Signup from './components/Sign-up/sign-up';
import LoginForm from './components/Login-form/login-form';
import myGarden from "./components/MyGarden/myGarden";

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
   return (
     <div>
       <Router>
       <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
       {!this.state.loggedIn ?
       // if user not logged in,  force login
       <Switch>
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
       </Switch>
       :
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/explore" component={Explore} />
           <Route exact path="/search" component={Search} />
           <Route exact path="/myGarden" component={myGarden} />
         </Switch>
       }
     </Router>
     </div>
   );
}
}
export default App;
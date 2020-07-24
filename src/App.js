
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Screens/Login';
import Locate from './Screens/Locate';
import Parking from './Screens/Parking';
import Register from './Screens/Register';
import app,{db} from './firebase';
import './App.css';
import Dashboard from './Screens/Dashboard';


const auth = app.auth();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isregisterd: false,
      isLoggedin: false,
      user: '',
      query:'',
      uid:''
    };
    this.logIn = this.logIn.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.getQuery=this.getQuery.bind(this);
  }
  logIn(name, pass) {
    console.log('login', name, pass);
    auth.setPersistence('local')
    .then(
      () => {
        auth.signInWithEmailAndPassword(name, pass)
        .then(
          (u) => {
           if (u.user) {
            this.setState({
              isLoggedin: true,
              user: u.user.displayName,
              uid:u.user.uid,
            });
          }
        },
        ()=>{
          alert('wrong credentials')
        }
        
        );
      });
  }
  registerUser(name,vehicleno,vehicletype,mail, pass) {
    auth.createUserWithEmailAndPassword(mail, pass).then(
      userCred => {
        if (userCred.user) {
          userCred.user.updateProfile({
            displayName: name
          });
          this.setState({
            isregisterd: true,
            isLoggedin: true,
            user: userCred.user.displayName,
            uid:userCred.user.uid,
          });
          db.collection('users').doc(userCred.user.uid).set({
            vehicleno:vehicleno,
            vehicletype:vehicletype,
            parkedAt:''
          });
        }
      }
    ).catch(err => { console.log(err) });
  }
  getQuery(q){
    this.setState({
      query:q
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar user={this.state.user} />
          <Switch>
            <Route exact path='/' >
              {auth.currentUser ? <Redirect to='/Dashboard' /> : <Login checkLoggedIn={this.logIn} />}
            </Route>
            <Route exact path='/Register'>
              {auth.currentUser ? <Redirect to='/' /> : <Register registerUser={this.registerUser} />}
            </Route>
            <Route exact path='/Dashboard'>
              {auth.currentUser ? <Dashboard user={auth.currentUser} /> : <Redirect to='/' />}
            </Route>
            <Route exact path='/Locate'>
              {auth.currentUser ? <Locate query={this.getQuery}/> : <Redirect to='/' />}
            </Route>
            <Route exact path='/Parking'>
              {auth.currentUser ? <Parking query={this.state.query} uid={this.state.uid}/> : <Redirect to='/' />}
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}



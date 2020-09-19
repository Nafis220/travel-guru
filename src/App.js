import { Slider } from '@material-ui/core';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Login/Login';


import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const placeContext = React.createContext();
export const traveler = React.createContext();
function App() {
  const [place,setPlace] = useState({}) 
  const [user,setUser] = useState({
    isSinedIn : 'false',
    name:'',
    email :'',
    password : '',
    photo : '', 
    error : '',
  })
  return (
    <placeContext.Provider value = {[place,setPlace]} >
      <Router> 
        
        <Switch> 
        <Route exact  path ='/'> 
        <Home></Home> 
           </Route>
          <Route exact path="/home"> 
           <Home></Home>      
          </Route>
          <traveler.Provider value={[user,setUser]}>
          <Route exact path="/login"> 
           <Login/>
          </Route>
          <Route exact path ='/booking' >
            <Booking/>
          </Route>
          <PrivateRoute exact path ='/hotel'> 
            <Hotel place = {place}></Hotel>
          </PrivateRoute>
          </traveler.Provider>
         
          <Route exact path="*"> 
      <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
 
  
      </placeContext.Provider>
    );
  };
  
export default App;

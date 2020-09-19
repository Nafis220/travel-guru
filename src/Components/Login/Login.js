import React, { useContext, useState } from 'react';

import * as firebase from "firebase/app";
import "firebase/auth"; 
import firebaseConfig from './firebase.confiq';
import { traveler } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import navIcon from '../../Image/Logo.png';
import './Login.css'
firebase.initializeApp(firebaseConfig);




function Login() {
  const [newUSer, setNewUSer] = useState(false);

  let history = useHistory();
  let location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  

const [user,setUser] = useContext(traveler)
  const provider = new firebase.auth.GoogleAuthProvider();
  const FbProvider = new firebase.auth.FacebookAuthProvider();
     const handleSignIn = () => {
      firebase.auth().signInWithPopup(provider)  
      .then(res =>{
         const  {displayName,email,photoURL} = res.user;
        
        const singedUsers = {
          isSingedIn : true,
          name : displayName ,
          photo : photoURL ,
        email : email ,
        }
		setUser(singedUsers);
		history.replace(from)
        
      })
        .catch(err =>{
          console.log(err)
          console.log(err.massage)
        })
    }

    const  handleSignOut =  () => {
     firebase.auth().signOut() 
     .then(res => {
       const singedOutUSer = {
         isSingedIn : false,
          name : '',
          email : '' ,
          password : '',
          error : '',
          photo : '',
          success : false,
       }
       setUser(singedOutUSer)
     })
     .catch(err =>{
      
     }) 
    }

  const handleSubmit = (event) => {
  if(newUSer && user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
	   setUser(newUserInfo);
	   history.replace(from)
       updateUserNAme(user.name)
    })
    .catch(error => {
      // Handle Errors here.
      
    const newUserInfo = {...user}; 
   newUserInfo.error = error.message;
   newUserInfo.success = false
    setUser(newUserInfo);
	history.replace(from)
    });
  }
  if(!newUSer && user.email && user.password ){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
     setUser(newUserInfo);
     updateUserNAme(user.name)
     history.replace(from)
        console.log('sign in user info',res.user)
    })
    .catch(function(error) {
      const newUserInfo = {...user}; 
    newUserInfo.error = error.message;
    newUserInfo.success = false
    setUser(newUserInfo);
    });    
  }
  event.preventDefault()
  }
  const handleFBLogin = () =>{
    firebase.auth().signInWithPopup(FbProvider)
    .then(res =>{
      const  {displayName,email,photoURL} = res.user;
      console.log(res.user.displayName)
      const singedUsers = {
       isSingedIn : true,
       name : displayName ,
       photo : photoURL ,
       email : email ,
     }
    setUser(singedUsers);
    history.replace(from)
    })
    .catch(function(error) {
      const newUserInfo = {...user}; 
      newUserInfo.error = error.message;
      newUserInfo.success = false
    setUser(newUserInfo);
    }); 
  }
  const handleChange = (event) => {
  let isFieldValid = true;
   if (event.target.name === 'email'){
    const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value) 
    isFieldValid = isEmailValid
   }
   if ( event.target.name === 'password'){
    const passLength = event.target.value.length > 6 ;
    const hasPassNumber = /\d{1}/.test(event.target.value);
    isFieldValid = passLength && hasPassNumber
   }
   if(isFieldValid){
  const newUserInfo = {...user};
  newUserInfo[event.target.name] = event.target.value;
  setUser(newUserInfo);
   
   }
  }
 const updateUserNAme = name => {

  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name,
 
  }).then(res =>{
    console.log('User name Updated')
  }).catch(error =>  {
  console.log('error')    
  })
 }

  return (
    <div className="App">
     
     <nav className="navbar navbar-expand-lg bg-primary">
  <a className="navbar-brand " href="#"> 
  <img className="w-25" src={navIcon} alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
  <div> 
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      
    </form>
  </div>
  <div> 
  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">News<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Destination</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <Link to="/login"> 
        
        <a className="nav-link " href="#"><button className="btn btn-yellow my-1 my-sm-0" type="submit">Login</button></a>

        </Link>
      </li>
    </ul>
  </div>
   
  </div>
</nav>                                
 

   

  
<  form onSubmit={handleSubmit}>


{ newUSer ?( <div>  <h2> New Signup Form</h2>
  <input onBlur = {handleChange}  type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span>What's your First Name?</span></label>
  <input onBlur = {handleChange}  type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span>What's your Last Name?</span></label>
  <input onBlur = {handleChange}  type="text" name="email" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span>What's your Email?</span></label>
  <input onBlur = {handleChange}  type="text" name="password" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span>Set Password</span></label>
  
  <input onClick ={handleSubmit} type="submit" value='Creat an Account'/>
        <p>Already have an account ? <a className='text-danger'  onClick={()=>{setNewUSer(!newUSer)}} >Login</a> </p></div>):

        (
          <div> 
          <h2>  Login </h2> 
          <input onBlur = {handleChange}  type="text" name="email" class="question" id="nme" required autocomplete="off" />
        <label for="nme"><span>Email</span></label>
          <input onBlur = {handleChange}  type="text" name="password" class="question" id="nme" required autocomplete="off" />
           <label for="nme"><span> Password</span></label>

          <input onClick ={handleSubmit} type="submit" value='Login'/>
      <p>Don't have an account ? <a className='text-danger'  onClick={()=>{setNewUSer(!newUSer)}} >Sign Up</a> </p>

          </div>
        )}
  
</form>
<button onClick={handleFBLogin} class="loginBtn loginBtn--facebook">
  Login with Facebook
</button>


{ user.isSingedIn ?
      <button className="loginBtn loginBtn--facebook" onClick={handleSignOut} >Sign Out</button> :<button className="loginBtn loginBtn--google"onClick={handleSignIn} >Sign In</button> }
    </div>
  );
}// class="loginBtn loginBtn--facebook"

export default Login;

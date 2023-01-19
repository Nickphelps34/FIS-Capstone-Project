import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Cards from './CardsComponent';
import Home from './Home';
import Decks from './Decks';
import SignUp from './SignUp';
import { useState, useEffect } from 'react';


// fetch ("http://localhost:3000/")
// .then(r => r.json())
// .then(console.log)


const App = () => {

  const [loggedInUser, setLoggedInUser] = useState( null )
  //console.log("State of loggedInUser", loggedInUser)

  useEffect(
    ()=>{

      fetch( "/userInSession" )
      .then( r => r.json() )
      .then( userAlreadyLoggedIn =>  
        setLoggedInUser(userAlreadyLoggedIn) )
      }, 
    []
    )
  
  
  const [userToLogin, setUserToLogin] =useState(
    {
      username: "",
      password: ""
    }
  )
  console.log("state of userToLogin",userToLogin)

  const handleOnChangeToUserLoginIn = (e) =>{
    setUserToLogin( {...userToLogin , [e.target.name]: e.target.value } )
  }

  const handleLoginSubmit=(e)=> {e.preventDefault()
      
    console.log('ByeBug!!')

    fetch ( "/login", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( userToLogin )
  
  } )
  .then(r => r.json())
  .then(hopefullyAUser => {console.log(hopefullyAUser)
    
  setLoggedInUser( hopefullyAUser )
  })
}

  const handleLogout = () => {
    
    fetch ("/logout", {method: "DELETE"} )
      .then(r=>r.json())
      .then( deleteResponse => {
        setLoggedInUser( null )
      } )
  
  }
  

  return(
    <>
      <div className="App">Final Project
        { loggedInUser ? <h2>Welcome { loggedInUser.name }! </h2> : <></> }   
        <NavBar/> 
            <Routes>
              <Route path= "/" element={<div></div>} />
              <Route path="/home" element={<Home/>}/>
              <Route path="/cards" element={<Cards/>}/>
              <Route path="/decks" element={<Decks/>}/>
              <Route path="/signup" element={<SignUp/>}/>
            </Routes>
          
            <br></br><br></br>
            <br></br><br></br>
          
          <h1>Welcome! Login?</h1>
          <form onSubmit={ handleLoginSubmit }>
          <input 
            onChange={ handleOnChangeToUserLoginIn }
            name="username"
          />
          
          <input 
            onChange={ handleOnChangeToUserLoginIn } 
            type="password"
            name="password"
            />

          <button type="submit" >submit</button>

        </form>
        
        
        <br></br><br></br>
        <br></br><br></br>
        
        <h1>Or Sign-out?</h1>
        <button onClick={handleLogout}>LogOut?</button>
          
      </div>
    </>
  );
}

export default App;

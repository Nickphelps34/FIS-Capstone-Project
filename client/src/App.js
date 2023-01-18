import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
//import TestForm from './TestForm';
import Cards from './CardsComponent';
import Home from './Home';
import Decks from './Decks';
import SignUp from './SignUp';
import { useState } from 'react';


// fetch ("http://localhost:3000/")
// .then(r => r.json())
// .then(console.log)


// const name = "Nick Phelps"

const App = () => {
  // const location = useLocation();
  // const [page, setPage] = useState([])
  

  // const handleClick  = () => {
  //   console.log(location);
  // }
  // useEffect(()=>{
  //   fetch('http://localhost:3000/cards')
  //     .then(r => r.json())
  //     .then(arrayOfData =>
  //       setPage(arrayOfData)
  //       )
  // }, [])
  // console.log(setPage)

  // console.log("BYEBUG!!!")
  // fetch ( "http://localhost:3000/login", 
  // {
    
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify( 
  //     {
  //       username: "Nick",
  //       password: "7412"
  //     } )
  
  // } )
  // .then(r => r.json())
  // .then(console.log)
  const [userToLogin, setUserToLogin] =useState(
    {
      username: "",
      password: ""
    }
  )
  console.log("state of userToLogin",userToLogin)

  const handleOnChangeToUserLoginIn = (e) =>{
    console.log(e)
    setUserToLogin( {...userToLogin , [e.target.name]: e.target.value } )
  }

  const handleLoginSubmit=(e)=> {e.preventDefault()
      console.log('ByeBug!!')
    fetch ( "http://localhost:3000/login", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( userToLogin )
  
  } )
  .then(r => r.json())
  .then(console.log)


  }

  return(
    <>
      <div className="App">Final Project
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
        
        
        <NavBar/> 
            <Routes>
              <Route path= "/" element={<div></div>}   />
              <Route path="/home" element={<Home/>}/>
              <Route path="/cards" element={<Cards/>}/>
              <Route path="/decks" element={<Decks/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
            </Routes>
          
      </div>
    </>
  );
}

export default App;

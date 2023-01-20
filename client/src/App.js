import React from 'react';
import { Routes, Route, BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
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
  const [myDeck, setMyDeck] = useState([])
  const [myCards, setMyCards] = useState([]) 
  const location = useLocation()
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const toggleForm = () =>{
    setToggle(!toggle)
  }
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
  //console.log("state of userToLogin",userToLogin)

  const handleOnChangeToUserLoginIn = (e) =>{
    setUserToLogin( {...userToLogin , [e.target.name]: e.target.value } )
  }

  const handleLoginSubmit=(e)=> {e.preventDefault()
      
    //console.log('ByeBug!!')

    fetch ( "/login", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( userToLogin )
  
  } )
  .then(r => r.json())
  .then(data => {console.log(data)
    
  setLoggedInUser( data )
  })
}

  const handleLogout = () => {
    
    fetch ("/logout", {method: "DELETE"} )
      .then(r=>r.json())
      .then( deleteResponse => {
        setLoggedInUser( null )
      } )
      navigate('/', { replace: true })
    
  }
  useEffect(() => {
    fetch ("/cards")
    .then(r=>r.json())
    .then(data => setMyCards(data))
  }, [])

  useEffect(() => {
    fetch ("/decks")
    .then(r=>r.json())
    .then(data => setMyDeck(data))
  }, [])
  
  return(
    <>
      <div className="App">
        { loggedInUser ? <h2>Welcome { loggedInUser.name }! </h2> : <></> }   
        <NavBar/> 
            <Routes>
              <Route path= "/" element={<div></div>} />
              <Route path="/home" element={<Home/>}/>
              <Route path="/cards" element={<Cards myCards={myCards}/>}/>
              <Route path="/decks" element={<Decks myDeck={myDeck} />}/>
              <Route path="/signup" element={<SignUp/>}/>
            </Routes>
          
            <br></br><br></br>
            <br></br><br></br>
          
          { !loggedInUser ?
            <h1>Welcome! Login?</h1> : <></>}
          { !loggedInUser ?
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
          : <></>}
        
        <br></br><br></br>
        <br></br><br></br>
        
        {loggedInUser ?  <h1> Logout?  <button onClick={handleLogout}>LogOut?</button></h1> : <></>} 
      </div>
    </>
  );
}

export default App;

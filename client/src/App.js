import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Cards from './CardsComponent';
import Home from './Home';
import Decks from './Decks';
import SignUp from './SignUp';
import { useState, useEffect } from 'react';
import DeckInfo from './DeckInfo';

  const App = () => {
    const navigate = useNavigate()
    const [myCards, setMyCards] = useState([]) 
    const [loggedInUser, setLoggedInUser] = useState( null )
    const [userToLogin, setUserToLogin] =useState(
      {username: "", password: ""})
  useEffect(()=>{
      fetch( "/userInSession" )
      .then( r => r.json() )
      .then( userAlreadyLoggedIn =>  
        setLoggedInUser(userAlreadyLoggedIn) )
  }, [] )
  const handleOnChangeToUserLoginIn = (e) =>{
    setUserToLogin( {...userToLogin , [e.target.name]: e.target.value } )
  }

  const handleLoginSubmit=(e)=> {
    e.preventDefault()
    fetch ( "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( userToLogin )} )
    .then(r => {
      if (r.ok) {
        r.json().then( (user) => {
          setLoggedInUser(user )
          navigate('/home')
        }  )
      } else {
        r.json().then(badData => {
          console.warn(badData)
        })
      }
    }) 
  }

  const handleLogout = () => {
    fetch ("/logout", {
        method: "DELETE"} )
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
  
  return(
    <>
      <div className="App" >
        { loggedInUser ? <h2>Welcome { loggedInUser.name }! </h2> : <></> }   
        <NavBar/> 
            <Routes className="All-Nav-Links">
              <Route path="/signup" element={<SignUp loggedInUser={loggedInUser}  setLoggedInUser={setLoggedInUser}/>}/>
              <Route path= "/" element={<div></div>} />
              <Route path="/home" element={<Home/>}/>
              <Route path="/cards" element={<Cards myCards={myCards}/>}/>
              <Route path="/decks" > 
                <Route index element={<Decks decks={loggedInUser ? loggedInUser.decks : []} />}/>
                <Route path=":id" element={<DeckInfo myCards={myCards}/>}/>
              </Route>
              
            </Routes>
          { !loggedInUser ?
            <h1 className='Log-in-Message'>Welcome! Login?</h1> : <></>}
          { !loggedInUser ?
          <fieldset>
            <legend className='login-legend'>Login</legend>
              <form className='Login-Form' onSubmit={ handleLoginSubmit }>
                <label for="username">Username:</label>
                <input 
                  onChange={ handleOnChangeToUserLoginIn }
                  name="username"
                />
                <label for="password">Password:</label>
                <input 
                  onChange={ handleOnChangeToUserLoginIn } 
                  type="password"
                  name="password"
                />
                <button className='Login-Submit-button'>submit</button>
              </form>
          </fieldset>
          : <></>}
        
        
        {loggedInUser ?  <h1 className="Logout"> Logout?  <button onClick={handleLogout}>LogOut?</button></h1> : <></>} 
      </div>
    </>
  );
}

export default App

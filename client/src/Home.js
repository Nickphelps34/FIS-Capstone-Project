import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Cards from './CardsComponent';
import Decks from './Decks';
import SignUp from './SignUp';

  const Home = () => {

    return (
      <div>
          <h1>Home Component</h1>
          <NavBar/> 
            <Routes>
              <Route path= "/" element={<div></div>} />
              <Route path="/cards" element={<Cards/>}/>
              <Route path="/decks" element={<Decks/>}/>
              <Route path="/signup" element={<SignUp/>}/>
            </Routes>
      </div>
    )
  }

export default Home
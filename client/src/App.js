import React, {useState, useEffect} from 'react';
// import { Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import TestForm from './Testform';
import Cards from './CardsComponent';
import Home from './Home';


const cardsURL = "/cards"
const name = "Nick Phelps"
const App = () => {
  const [page, setPage] = useState("/")
  
  useEffect(()=>{
    fetch(cardsURL)
      .then(r => r.json())
      .then(arrayOfData =>
        setPage(arrayOfData)
        )
  }, [])
  
  
  return (
    <>
      <div className="App">Final Project

      <NavBar name={name} age="26" gender="male" />
      <Home/>
      <TestForm/>
      <Cards/>

      </div>
    </>
  );
}

export default App;

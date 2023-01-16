import React, {useState, useEffect} from 'react';
// import { Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import TestForm from './Testform';
import Cards from './CardsComponent';
import Home from './Home';


// fetch ("http://localhost:3000/")
// .then(r => r.json())
// .then(console.log)


const name = "Nick Phelps"

const App = () => {
  const [page, setPage] = useState("/")
  
  // useEffect(()=>{
  //   fetch('http://localhost:3000/')
  //     .then(r => r.json())
  //     .then(arrayOfData =>
  //       setPage(arrayOfData)
  //       )
  // }, [])
  
  fetch ("http://localhost:3000/")
  .then(r => r.json())
  .then(console.log)


  return(
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

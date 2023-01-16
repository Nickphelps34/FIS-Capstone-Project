import React, {useState} from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import TestForm from './Testform';

const name = "Nick"
const App = () => {
  
  const [page, setPage] = useState("/")
  
  
  
  return (
    <>
      <div className="App">Final Project

      <NavBar name={name} age="26" gender="male" />
      <TestForm/>

      </div>
    </>
  );
}

export default App;

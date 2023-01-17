// import React, {useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import './App.css';
// import NavBar from './NavBar';
// import TestForm from './TestForm';
// import Cards from './CardsComponent';
// import Home from './Home';


// fetch ("http://localhost:3000/")
// .then(r => r.json())
// .then(console.log)


// const name = "Nick Phelps"

const App = () => {
//   const [page, setPage] = useState([])
  
  // useEffect(()=>{
  //   fetch('http://localhost:3000/cards')
  //     .then(r => r.json())
  //     .then(arrayOfData =>
  //       setPage(arrayOfData)
  //       )
  // }, [])
  // console.log(setPage)

  fetch ("http://localhost:3000/users")
  .then(r => r.json())
  .then(console.log)


  return(
    <>
      <div className="App">Final Project
        <BrowserRouter>
          <Routes>
            <Route/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

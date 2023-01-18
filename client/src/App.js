import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
//import TestForm from './TestForm';
import Cards from './CardsComponent';
import Home from './Home';
import Decks from './Decks';
import SignUp from './SignUp';
// import { useLocation } from 'react-router-dom';


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

  fetch ("http://localhost:3000/users")
  .then(r => r.json())
  .then(console.log)


  return(
    <>
      <div className="App">Final Project
        <NavBar/> 
          
            <Routes>
              <Route path= "/" element={<div>Log in/Sign Up go Here</div>}   />
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

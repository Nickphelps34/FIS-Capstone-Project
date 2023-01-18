import React from "react";
import { Link } from "react-router-dom";

const Decks = () => {

  return (
    <>
      <h1>Deck Component</h1>
      <Link to="/home" className="btn">Home</Link>
    </>
  )

}
export default Decks
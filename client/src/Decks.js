import React from "react";
import { Link } from "react-router-dom";

const Decks = () => {

  return (
    <>
      <div>Deck Component</div>
      <Link to="/home" className="btn">Home</Link>
    </>
  )

}
export default Decks
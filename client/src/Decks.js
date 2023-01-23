import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";

const Decks = ({decks}) => {
  console.log(decks)
  return (
    <>
      <h1>Deck Component</h1>
      <Link to="/home" className="btn">Home</Link>
      {/* <Link to="/DeckList"> </Link> */}
      <DeckList decks={decks}></DeckList>
    </>
  )

}
export default Decks
import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList";

const Decks = ({myDeck}) => {
  //console.log(myDeck)
  return (
    <>
      <h1>Deck Component</h1>
      <Link to="/home" className="btn">Home</Link>
      <Link to="/DeckList"> </Link>
      <DeckList myDeck={myDeck} key={myDeck.id}></DeckList>
    </>
  )

}
export default Decks
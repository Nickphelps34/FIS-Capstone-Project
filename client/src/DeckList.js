import React from "react";

const DeckList = ({myDeck}) => {
  //console.log(myDeck.deck_commander)
  return(

    <div>
      <div>Deck Commander: {myDeck.deck_commander}</div>
      <div>Deck Name: {myDeck.deck_name}</div>
      <div>Deck Color: {myDeck.deck_color}</div>
      <div>User: {myDeck.user_id}</div>
    </div>
  )
}

export default DeckList
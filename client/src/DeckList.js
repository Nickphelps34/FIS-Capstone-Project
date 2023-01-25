import React from "react";
import { useNavigate } from "react-router-dom";

const DeckList = ({decks}) => {
  const navigate = useNavigate()
  const renderDeckLi = (deckObj) => {
    const goToDeck = () => {
      navigate(`/decks/${deckObj.id}`)
    }
    return <li key={deckObj.id} onClick={goToDeck}>{deckObj.deck_name}</li>
  }
  return(

    <div>
      <ul className="render-decks"> { decks.map(renderDeckLi) }</ul>
    </div>
  )
}

export default DeckList
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DeckInfo from "./DeckInfo";

const DeckList = ({decks}) => {
  const navigate = useNavigate()
  const params = useParams()
  const renderDeckLi = (deckObj) => {
    //console.log(deckObj)
    const goToDeck = () => {
      navigate(`/decks/${deckObj.id}`)
    }
    return <li key={deckObj.id} onClick={goToDeck}>{deckObj.deck_name}</li>
  }
  //console.log(decks)
  return(

    <div>
      <ul> { decks.map(renderDeckLi) }</ul>
    </div>
  )
}

export default DeckList
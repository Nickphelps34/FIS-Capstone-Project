import React from "react";
import { useState } from "react";

const CardForm = ({myCards}) => {

  const [newCardType, setNewCardType] = useState ("")
  const [newCardManaValue, setNewCardManaValue] = useState ("")
  const [newCardColor, setNewCardColor] = useState("")
  const [newCardName, setNewCardName] = useState("")

  const handNewCardForm = (e) => {e.preventDefault()
    let newCard = {
      id: "",
      card_type: newCardType,
      mana_value: newCardManaValue,
      card_color: newCardColor,
      card_name: newCardName
    }
  fetch ( "/cards", 
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( newCard )
} )
  .then(r => r.json())
  .then((newCard))}


  return (
  <>
    <fieldset className="card-fieldset">
      <legend className="card-legend">Add a Card?</legend>
        <form className="new-card-form" onSubmit={handNewCardForm}>
          <label className="card-name">Card Name:</label>
            <input value={newCardName} onChange={(e)=>setNewCardName(e.target.value)}></input>
          <label className="card-type">Card Type:</label>
            <input value={newCardType} onChange={(e)=>setNewCardType(e.target.value)}></input>
          <label className="mana-value">Mana Value</label>
            <input value={newCardManaValue} onChange={(e)=>setNewCardManaValue(e.target.value)}></input>
          <label className="card-color">Card Color</label>
            <input value={newCardColor} onChange={(e)=>setNewCardColor(e.target.value)}></input>
          <input type="submit" className="new-card-btn"/>
        </form>
    </fieldset>    
  </>
)}

export default CardForm
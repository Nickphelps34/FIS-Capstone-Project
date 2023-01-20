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
    <br></br><br></br>
    <form className="new-card-form" onSubmit={handNewCardForm}>
      <input placeholder="card name" value={newCardName} onChange={(e)=>setNewCardName(e.target.value)}></input>
      <input placeholder="card type" value={newCardType} onChange={(e)=>setNewCardType(e.target.value)}></input>
      <input placeholder="mana value" value={newCardManaValue} onChange={(e)=>setNewCardManaValue(e.target.value)}></input>
      <input placeholder="card color" value={newCardColor} onChange={(e)=>setNewCardColor(e.target.value)}></input>
      <input type="submit"/>
    </form>
  </>
)}

export default CardForm
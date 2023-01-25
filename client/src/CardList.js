import React from "react";

const CardList = ({myCards}) => {

  //console.log(myCards)
  return(
    <div className="Cards-card">
      <div className="Cards-name">Card Name:  {myCards.card_name}</div>
      <div className="Cards-type">Card Type:  {myCards.card_type}</div>
      <div className="Cards-mana">Mana Value:  {myCards.mana_value}</div>
      <div className="Cards-color">Card Color:  {myCards.card_color}</div>
    </div>
  )

}

export default CardList
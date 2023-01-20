import React from "react";

const CardList = ({myCards}) => {

  //console.log(myCards)
  return(
    <>

    <div>Card Name:  {myCards.card_name}</div>
    <div>Card Type:  {myCards.card_type}</div>
    <div>Mana Value:  {myCards.mana_value}</div>
    <div>Card Color:  {myCards.card_color}</div>
    


    </>
  )

}

export default CardList
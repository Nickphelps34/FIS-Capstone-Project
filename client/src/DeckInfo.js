import  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import Decks from "./Decks";


const DeckInfo = ({myCards}) => {

  const [usersDeck, setUsersDeck] = useState({cards: []})
  // const [cardsToAdd, setCardsToAdd] = useState([])
  const {id} = useParams()
  console.log(usersDeck.cards)
  const renderCardLi = (myCard) => {
    return (
      <>
      <li key="uniqueId1"> {myCard.card_name} : {myCard.card_type}
      <button key="uniqueId2" onClick={ () => {handleAddButton(myCard)} }  >Add Card</button>
      </li>
      </>
    )
  }
  const handleAddButton = (cardObj) => {
    console.log("card id", cardObj.id)
    console.log("Deck id?", id)
    fetch (`/collections`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        card_id: cardObj.id,
        deck_id: id
      })
    } )
    .then(r => {
      if (r.ok) {
        r.json().then(card => {
          setUsersDeck( {...usersDeck, cards: [...usersDeck.cards, card] } )
        })
      } else { 
        r.json().then(badData => {
          console.warn(badData)
        })
      }
      
    })
  }
  
  //console.log(usersDeck)
  
  useEffect(() => {
    fetch(`/decks/${id}`)
    .then( r => r.json())
    .then( r => setUsersDeck(r))}, [id])
    console.log(usersDeck)
    

  // useEffect(() => {
  //   fetch('/cards')
  //   .then( r => r.json())
  //   .then( r => setCardsToAdd(r))}, [])
  
  

  return(

    <div>
      <div>
        <ul key="uniqueKey3">Cards inside of the deck :
            {usersDeck.cards.map( ( cardObj )=> { 
              return (
                <li>{cardObj.card_name}</li>
              )
             } ) }
        </ul>
      </div>
      <h1> {usersDeck.details}</h1>
      <h1>Color: {usersDeck.deck_color}</h1>


      <menu key="uniqueKey2">{myCards.map(renderCardLi ) }</menu>

    </div>
  )
}
export default DeckInfo
import  {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Decks from "./Decks";




const DeckInfo = ({myCards}) => {

  const [usersDeck, setUsersDeck] = useState({cards: []})
  const [cardsToAdd, setCardsToAdd] = useState([])
  const {id} = useParams()
  console.log(usersDeck.cards)
  const renderCardLi = (myCard) => {
    return (
      <>
      <li key="uniqueId"> {myCard.card_name} : {myCard.card_type}
      <button onClick={ () => {handleAddButton(myCard)} }  >Add Card</button>
      </li>
      </>
    )
  }

  const handleOnChangeForCards = (e) =>{
    setCardsToAdd( {...cardsToAdd , [e.target.card]: e.target.value } )
  }
  const handleAddButton = (cardObj) => {
    console.log("card id", cardObj.id)
    console.log("Deck id?", id)
    fetch (`/collections`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cardsToAdd)} )
    .then(r => {
      if (r.ok) {
        r.json().then(goodData => {
          console.log(goodData)
        })
      } else { 
        r.json().then(badData => {
          console.warn(badData)
        })
      }
      
    })
  }
  


  // const handleOnChangeToUserLoginIn = (e) =>{
  //   setUserToLogin( {...userToLogin , [e.target.name]: e.target.value } )
  // }

  // const handleLoginSubmit=(e)=> {e.preventDefault()
  //   fetch ( "/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify( userToLogin )} )
  //   .then(r => r.json())
  //   .then(data => {console.log(data)
  //   setLoggedInUser( data )
  //   })}


  useEffect(() => {fetch(`/decks/${id}`)
  .then( r => r.json())
  .then( r => setUsersDeck(r))}, [])
    //console.log(usersDeck)
    

  useEffect(() => {fetch('/cards')
    .then( r => r.json())
    .then( r => setCardsToAdd(r))}, [])
    //console.log(cardsToAdd)
  
  

  return(

    <div>
      <div>
        <ul>Cards inside of the deck
            {usersDeck.cards.map( ( cardObj )=> { 
              return (
                <li>{cardObj.card_name}</li>
              )
             } ) }
        </ul>
      </div>
      
      <h1>Deck Name: {usersDeck.deck_name}</h1>
      <h1>Commander: {usersDeck.deck_commander}</h1>
      <h1>Color: {usersDeck.deck_color}</h1>

      <menu>{myCards.map(renderCardLi ) }</menu>

    </div>
  )
}
{/* <ul> { decks.map(renderDeckLi) }</ul> */}
export default DeckInfo
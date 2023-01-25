import { Link } from "react-router-dom"
import CardForm from "./CardForm"
import CardList from "./CardList"

const Cards = ({myCards}) => {
  //console.log(myCards)
  return(
    <div>
      <h1>Cards Component</h1>
      <Link to="/home" className="home-btn">Home</Link>
      <Link to="/CardList"> </Link>
      {myCards.map((myCards) =>
      <CardList myCards={myCards} key={myCards.id}/>
      )} 

      <CardForm myCards={myCards}></CardForm>
    </div>
)}
export default Cards
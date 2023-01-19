import { Link } from "react-router-dom"
import CardList from "./CardList"

const Cards = () => {

  return(
    <div>
      <h1>Cards Component</h1>
      <Link to="/home" className="btn">Home</Link>
      <Link to="/CardList"> </Link>
    </div>
)}
export default Cards
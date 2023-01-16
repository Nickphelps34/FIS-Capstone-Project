//import { NavLink } from "react-router-dom";


  const NavBar = (props) => {
    console.log(props)
    return (
    <div className="navbar">
        {/* <NavLink className="nav-links-home" to="/">Home</NavLink>
        <NavLink className="nav-link-cards">Cards</NavLink>
        <NavLink className="nav-link-decks">Decks</NavLink> */}
       <p>{props.name}</p>
       <p>{props.age}</p>
       <p>{props.gender}</p>

    </div>
  )}
export default NavBar
import { NavLink } from "react-router-dom"

  const NavBar = () => {



    return (
    <div className="NavBar">
        <ul className="All-Nav-Links">
          <NavLink className="Nav-Links-Home" to="/home">Home Page</NavLink>
          <NavLink className="Nav-Links-Cards" to="/cards"> Card Page</NavLink>
          <NavLink className="Nav-Links-Decks" to="/decks">Deck Page</NavLink>
          <NavLink className="Nav-Links-Signup" to="/signup">User Profile</NavLink>
        </ul>
    </div>
  )}
export default NavBar
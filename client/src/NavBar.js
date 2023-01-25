import { NavLink } from "react-router-dom"

  const NavBar = () => {



    return (
    <div className="NavBar">
        <div className="All-Nav-Links">
          <NavLink className="Nav-Links" to="/home">Home Page</NavLink>
          <NavLink className="Nav-Links" to="/cards"> Card Page</NavLink>
          <NavLink className="Nav-Links" to="/decks">Deck Page</NavLink>
          <NavLink className="Nav-Links" to="/signup">User Profile</NavLink>
        </div>
    </div>
  )}
export default NavBar
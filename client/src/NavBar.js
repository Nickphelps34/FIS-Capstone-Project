import { NavLink } from "react-router-dom"

  const NavBar = () => {



    return (
    <div className="NavBar">
      <h1 className="nav-title"></h1>
        <div className="All-Nav-Links">
          <NavLink classname="Nav-Links" to="/home">Home Page</NavLink>
          <NavLink classname="Nav-Links" to="/cards"> Card Page</NavLink>
          <NavLink classname="Nav-Links" to="/decks">Deck Page</NavLink>
          <NavLink classname="Nav-Links" to="/signup">Sign Up!</NavLink>
        </div>
    </div>
  )}
export default NavBar
import { NavLink } from "react-router-dom"

  const NavBar = () => {



    return (
    <div className="NavBar">
      <h1 className="nav-title"></h1>
        <div className="All-Nav-Links">
          <NavLink activeclassname="Nav-Links" to="/">Main page</NavLink> 
          <NavLink activeclassname="Nav-Links" to="/home">Home page</NavLink>
          <NavLink activeclassname="Nav-Links" to="/cards"> Card page</NavLink>
          <NavLink activeclassname="Nav-Links" to="/decks">Deck page</NavLink>
        </div>
    </div>
  )}
export default NavBar
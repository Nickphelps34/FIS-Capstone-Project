import { NavLink } from "react-router-dom"

  const NavBar = () => {



    return (
    <div className="NavBar">
      <h1 className="nav-title">Header</h1>
        <div className="All-Nav-Links">
          <NavLink activeClassName="Nav-Links" to="/">Main page</NavLink> 
          <NavLink activeClassName="Nav-Links" to="/home">Home page</NavLink>
          <NavLink activeClassName="Nav-Links" to="/cards"> Card page</NavLink>
          <NavLink activeClassName="Nav-Links" to="/decks">Deck page</NavLink>
        </div>
    </div>
  )}
export default NavBar
import { NavLink } from "react-router-dom";


  const NavBar = () => {
    return (
    <div className="NavBar">
      <h1 className="Nav-Title"></h1>
        <div className="All-Nav-Links"/>
          <NavLink className="Nav-Links" to="/">Main page</NavLink>
          <NavLink className="Nav-Links" to="/Home">Home page</NavLink>
          <NavLink className="Nav-Links" to="/Cards"> Card page</NavLink>
          <NavLink className="Nav-Links" to="/Decks">Deck page</NavLink>
    </div>
  )}
export default NavBar
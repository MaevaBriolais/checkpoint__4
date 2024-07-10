import "../styles/navBar.css"
import avatar from "../assets/images/avatar.png"
import { useState } from "react";

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 return (
    <header className="navbar">
  <span className="menu-burger" onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </span>
    <p> OSCAR </p>
  <div className="login">
    <img src={avatar} alt="avatar login"/>
  </div>
  <nav className={`menu ${isOpen ? 'open' : ''}`}>
    <ul>
      <li><a href="">Pâtisserie</a></li>
    </ul>
  </nav>
</header>
    );
  }
  
  export default NavBar;
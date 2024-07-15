import "../styles/navBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import avatar from "../assets/images/avatar.png";

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
      <Link to="/" className="LinkNav">
      <p> OSCAR </p>
      </Link>
      <div className="login">
        <img src={avatar} alt="avatar login" />
      </div>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
          <Link to="/patisseries">
            Pâtisseries
          </Link>
          </li>
          <li>
            <Link to="/">
            XXX</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navBar.css";

import avatar from "../assets/images/avatar.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <section className="navbar1">
      <button
        className="menu-burger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <Link to="/" className="LinkNav">
        <p> OSCAR </p>
      </Link>
      <div className="login">
        <img src={avatar} alt="avatar login" />
      </div>
      </section>
      <section className="menu">
      <nav className="navMenu">
      {isOpen ?
        <ul >
          <li>
            <Link to="/patisseries">
              Pâtisseries
              </Link>
          </li>
        </ul>
      : ""}
      </nav>
      </section>
    </header>
  );
}

export default NavBar;

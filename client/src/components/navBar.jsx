import "../styles/navBar.css"
import avatar from "../assets/images/avatar.png"

function NavBar() {
 return (
    <header className="navbar">
  <span className="menu-burger">
    <span></span>
    <span></span>
    <span></span>
  </span>
    <p> OSCAR </p>
  <div className="login">
    <img src={avatar} alt="avatar login"/>
  </div>
</header>
    );
  }
  
  export default NavBar;
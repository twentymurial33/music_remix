import HeaderStyles from "./Header.css";
import { Link } from "@remix-run/react";


function Header() {
  return (
    <header className="header">
      <div className="logo"> 
      <img src="your-logo.png" alt="Logo" />
      </div>    
        <nav className="navbar">
        <a href="#resources" className="nav-link">Resources</a>
        <a href="#contact" className="nav-link">Contact</a>
         <Link to="/music">Music</Link>
        </nav>
        <div className="auth-buttons">
        <button className="sign-in">Sign in</button>
        <button className="register">Register</button>
      </div>
    </header>
  );
}

export default Header;

export function links(){
    return[{rel:'stylesheet',href:HeaderStyles}]
}
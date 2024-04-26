import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
  <div className="navbar-brand">Mero Pasal</div>
  <ul className="navbar-nav">
    <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
    <li className="nav-item"><Link to={"/about"} className="nav-link">About Us</Link></li>
    <li className="nav-item"><Link to={"/contact"} className="nav-link">Contact Us</Link></li>
  </ul>
  <div className="dropdown">
    <button className="dropdown-btn">Categorized</button>
    <div className="dropdown-content">
      <Link to={"/men"}>Men</Link>
      <Link to={"/women"}>Women</Link>
      {/* <Link to={"/kids"}>Kids</Link> */}
      <Link to={"/jwelery"}>Jwelery</Link>
      <Link to={"/electronics"}>Electronics</Link>
    </div>
  </div>
  <ul className="navbar-nav">
    <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
    <li className="nav-item"><Link to={"/signup"} className="nav-link">Sign Up</Link></li>
  </ul>
  <label htmlFor="nav-toggle" className="nav-toggle-label">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </label>
  <input type="checkbox" id="nav-toggle" className="nav-toggle" />
</nav>
    </>
    
  )
}

export default Navbar

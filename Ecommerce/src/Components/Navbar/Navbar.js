import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = ({size,isauthenticated,handlelogout}) => {

  return (
    <>
    <nav className="navbar">
  <div className="navbar-brand">Mero Pasal</div>
  <ul className="navbar-nav">
    <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
     <li className="nav-item"><Link to={"/contact"} className="nav-link">Contact Us</Link></li>
  </ul>
  <div className="dropdown">
    <button className="dropdown-btn">Categorized</button>
    <div className="dropdown-content">
      <Link to={"/men"}>Men</Link>
      <Link to={"/women"}>Women</Link>
      <Link to={"/jwelery"}>Jwelery</Link>
      <Link to={"/electronics"}>Electronics</Link>
    </div>
  </div>
  <ul className="navbar-nav">
  <li className="nav-item"><Link to={"/add_cart"} className="nav-link">Cart</Link></li>
  <div className="badge">
            {isauthenticated?
              <span>{size}</span>
              :
              <div className='cbadge' ></div>
            }
            </div>
   </ul>

   {!isauthenticated?
    <ul className="navbar-nav">
      <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
    <li className="nav-item"><Link to={"/signup"} className="nav-link">Sign Up</Link></li>
    </ul>
      :
      <li className="nav-item"><Link onClick={handlelogout} className="nav-link">Logout</Link></li>
      }
  
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

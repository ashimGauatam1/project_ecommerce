import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
       <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link to={"/login"}>Log In</Link></li>
            <li><Link to={"/signup"}>Sign Up</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><a href="#">Free Designs</a></li>
            <li><a href="#">Latest Designs</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Popular Designs</a></li>
            <li><a href="#">Art Skills</a></li>
            <li><a href="#">New Uploads</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul className="links">
            <li><Link to={"women"}>Women</Link></li>
            <li><Link to={"men"}>Men</Link></li>
            <li><Link to={"women"}>Kids</Link></li>
            <li><Link to={"electronics"}>Electronics</Link></li>
            <li><Link to={"jwelery"}>Jwelery</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>About Us</h4>
          <form action="#">
          <p>We can subscribe and become a member to get heavy discount</p>
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          
          <p>
            Follow Mero Pasal in various social platform to get
             news, updates, helpful tips, and
            exclusive offers.
          </p>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer

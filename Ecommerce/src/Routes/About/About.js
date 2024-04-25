import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import image from './image.jpeg';
const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='about'>
        
      <div className="container">
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h2>About Developer</h2>
        </div>
        <div className="card-back">
        <div className='contain-image'>
            <img className='image' src={image}/>
        </div>
        <div className='card-content'>
          <p>I am of passionate individual dedicated to creating innovative solutions.</p>
          <p>Meet me:</p>
          <ul>
            <li>Ashim Gautam </li>
            <li>Good Proficiency at C,C++,HTML AND CSS</li>
            <li>REACT PYTHON DJANGO</li>
            <li>NODE JS AND EXPRESS JS</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default About

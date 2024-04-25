import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/createuser", user);
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while registering");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form__title">Register</h2>
          <div className="form-group">
            <label htmlFor="username">Full Name:</label>
            <input type="text" id="username" name="name" onChange={handleChange} className="input" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="input" onChange={handleChange} placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="input" onChange={handleChange} placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirmPassword" className="input" onChange={handleChange} placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;

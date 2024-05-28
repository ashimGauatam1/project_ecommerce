import React, { useState } from 'react'
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
  const navigate=useNavigate();
  const [user,SetUser]=useState({
    email:'',
    password:'',
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8080/auth/login", user);
        if (response.status == 200) {
            const authToken=response.data.token;
            onLogin(authToken);
            navigate("/");
        } else {
            console.log(response.data.error);
            alert("Invalid credentials");
        }
    } catch (error) {
        alert("Error while logging in");
    }
};

  const change=(e)=>{
    const {name,value}=e.target;
    SetUser({
      ...user,
      [name]:value
    })
  }
  return (
    <div>
      <div className="container">
      <form className="login-form" onSubmit={handlesubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={change} placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={change} placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
     </div>
  )
}
  export default Login;
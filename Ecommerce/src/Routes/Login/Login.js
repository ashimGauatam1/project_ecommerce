import React, { useState } from 'react'
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert';

const Login = ({onLogin}) => {
  const [showalert,Setalert]=useState(false);
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
            localStorage.setItem('authToken',authToken);
            onLogin(authToken);
            navigate("/");
        }
       } catch (error) {
        if(error.response.status==400){
          Setalert(true);
        }
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
      {showalert && <Alert type="danger" message="Invalid Credentials Check your details" onClose={() => Setalert(false)}/>}
      <div class="container">
    <div class="limage-container">
      <div class="overlay"></div>
    </div>
    <div class="form-wrapper">
      <div class="form-container">
        <div class="form-content">
          <div className="container">
            <form className="login-form" onSubmit={handlesubmit}>
              <h2>Login</h2>
              <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" id="email" name="email" onChange={change} placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" name="password" onChange={change} placeholder="Enter your password" required />
              </div>
              <button className='button' type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
     </div>
  )
}
  export default Login;
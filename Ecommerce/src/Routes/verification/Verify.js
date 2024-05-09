import React, { useEffect, useState } from 'react'
 import '../verification/Verify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 const Verify = () => {
  const navigate=useNavigate();
  const [otp,setOtp]=useState({
    enteredOtp:'',
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await axios.post("http://localhost:8080/auth/verify",otp);
    if(response.status==200){
       console.log("success");
       navigate('/login')
      }
    else{
      alert("error while fetching data");
    }
  }
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setOtp({
      ...otp,
      [name]:value
    })
  }
  return (
    <div>
      <div className="bcontainer">
        <h1>OTP Verification</h1>
        <form id="otpForm" className='form' onSubmit={handleSubmit}>
            <label htmlFor="otpInput">Enter OTP:</label>
            <input type="text" id="otpInput" className='vinput' name="otpInput" onChange={handlechange} maxLength={6} required/>
            <button type="submit" className='vbutton'>Verify</button>
        </form>
        <p id="message"></p>
    </div>
    </div>
  )
}

export default Verify

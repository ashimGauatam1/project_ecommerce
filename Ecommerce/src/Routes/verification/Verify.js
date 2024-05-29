import React, { useEffect, useState } from 'react'
 import '../verification/Verify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '../../Components/Alert/Alert';
 const Verify = () => {
  const navigate=useNavigate();
  const [message,SetMessage]=useState("");
  const [NoAlert,Setalert]=useState(false);

  const [otp,setOtp]=useState({
    enteredOtp: '',
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post("http://localhost:8080/auth/verify",otp);
      if(response.status===200){
         navigate('/login')
      }
    } catch (error) {
      if(error.response.status == 400){
        SetMessage("Invalid OTP please check your email and enter valid OTP.")
         Setalert(true); 
       } 
      else{
        SetMessage("Internal Server Error.")
        Setalert(true);
      }
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
      {NoAlert &&  <Alert type="danger" message={message} onClose={() => Setalert(false)} />}
      <div className="bcontainer">
        <h1>OTP Verification</h1>
        <form id="otpForm" className='form' onSubmit={handleSubmit}>
            <label name="enteredOtp">Enter OTP:</label>
            <input type="text" id="enteredOtp" className='vinput' name="enteredOtp" onChange={handlechange} maxLength={6} required/>
            <button type="submit" className='vbutton'>Verify</button>
        </form>
        <p id="message"></p>
    </div>
    </div>
  )
}

export default Verify

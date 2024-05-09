import React from 'react'
 import '../verification/Verify.css';
const Verify = () => {
  return (
    <div>
      <div className="bcontainer">
        <h1>OTP Verification</h1>
        <form id="otpForm" className='form'>
            <label htmlFor="otpInput">Enter OTP:</label>
            <input type="text" id="otpInput" className='vinput' name="otpInput" maxLength={6} required/>
            <button type="submit" className='vbutton'>Verify</button>
        </form>
        <p id="message"></p>
    </div>
    </div>
  )
}

export default Verify

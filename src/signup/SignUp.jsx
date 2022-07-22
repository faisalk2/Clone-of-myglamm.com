import React from 'react'
import "../css/login.css";
import {useNavigate } from 'react-router-dom';
import Otp from './Otp';
const SignUp = () => {
  
  const navigate = useNavigate();
  const nav = () => {
    navigate("/otp");
 }
  return (
      <div>
          <div className='log'>
              <h5>Get 15 % Good Points Back on every order</h5>
              <img src='https://www.myglamm.com/images/myglamm-logo.png' />
              <div className='mobile'>
                Mobile Number
              </div>
             
                  <hr></hr>
              
        
              <div className='option'>
                       <select className='select'>
                       <option value="0" className='op'>Country Code</option>
                       <option value="1" className='op'>+91</option>
                       <option value="2" className='op'>+1</option>
                       <option value="3" className='op'>+94</option>
                       <option value="4" className='op'>+944</option>
                       <option value="5" className='op'>+02</option>
                       <option value="6" className='op'>+89</option>
                      </select>
                  <input className='input' type="number"/>
              </div>
              <br></br>
        <button className='btn' onClick={nav}>Continue</button>
        <br></br>
        <p>By Signing up you agree to our <b>Terms & Conditions</b></p>

              
      </div>
     
    </div>
  )
}

export default SignUp;
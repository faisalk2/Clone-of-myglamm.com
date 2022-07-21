import React from 'react'
import "../css/login.css";
const Login = () => {
  return (
      <div>
          <div className='log'>
              <h5>Get 15 % Good Points Back on every order</h5>
              <img src='https://www.myglamm.com/images/myglamm-logo.png' />
              <div className='mobile'>
                <h5>Mobile Number</h5>
              </div>
              <div>
                  <hr></hr>
              </div>
              
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
              <button className='btn'>Continue</button>

              
          </div>
    </div>
  )
}

export default Login;
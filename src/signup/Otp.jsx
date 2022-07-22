import React from 'react'
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import "../css/otp.css";
import { useNavigate } from 'react-router-dom';
const Otp = () => {
   const navigate = useNavigate()
  const pop = () => {
    alert("Login Seccess");
    navigate("/");

  }
  return (
      <div className='image1'>
          <h6>VERIFY YOUR MOBILE NUMBER TO SIGNIN</h6>
          <br></br>
          <div>
              <img src='https://www.myglamm.com/images/mob-otp.png' />
          </div>
          <h5>ENTER OTP SENT ON MOBILE</h5>
    <HStack className='ch'>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
          </HStack>
          <h5>RESEND OTP</h5>
          <button className='btn1'onClick={pop}>VERIFY</button>
      </div>
      
  )
}

export default Otp
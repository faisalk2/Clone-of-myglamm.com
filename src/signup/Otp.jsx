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
      <div className='top1'>VERIFY YOUR MOBILE NUMBER TO SIGNIN</div>
          
          <br></br>
          <div className='img1'>
              <img src='https://www.myglamm.com/images/mob-otp.png' />
      </div>
      <div className='sentotp'>ENTER OTP SENT ON MOBILE</div>
          {/* <h5></h5> */}
    <HStack className='ch'>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
      </HStack>
      <div className='resend'>RESEND OTP</div>
          {/* <h5>RESEND OTP</h5> */}
          <button className='btn1'onClick={pop}>VERIFY</button>
      </div>
      
  )
}

export default Otp
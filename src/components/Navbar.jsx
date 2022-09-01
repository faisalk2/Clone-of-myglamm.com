import React from 'react'
import { 
Spacer,
Flex,
Box,
Input } from '@chakra-ui/react'
import { Logo } from './Logo'
import { MenuBar } from './MenuBar'
import { SearchBar } from './SearchBar'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { AiOutlineUser} from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { OfferBar } from './OfferBar' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';
import { faUser } from '@fortawesome/free-solid-svg-icons'


import SignupChakra from '../signup/SignupChakra'
import { useSelector } from 'react-redux/es/exports'
import Profile from '../signup/Profile'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigate=useNavigate()
const {isAuth}=useSelector((state)=>state.auth);
console.log(isAuth);


  return   (
    <Box className='navbar-sticky'   width='100%' >
    <OfferBar/>
    <Flex width='70%' direction='row' height='60px' margin='auto' pt='12px' >
      <Box> <Logo/> </Box>
      <Box className='searchbar' > <SearchBar/> </Box>
      <Spacer/>
      <Flex justifyContent={"space-between"} width="100px" >

      {/* <Box  cursor={"pointer"} > <FaShoppingBag style={{color: 'black', border:'1px', fontSize: '25px'}}/> </Box>
      <Box cursor={"pointer"} > <AiOutlineUser style={{color: 'black', fontSize: '25px'}}/> </Box> */}

      <Box onClick={()=>navigate("/mybag")}cursor={"pointer"} > <FaShoppingBag style={{color: 'black', border:'1px', fontSize: '25px'}}/> </Box>
      <Box cursor={"pointer"} > {isAuth ? <Profile/>:<SignupChakra/>} </Box>

      </Flex>
    </Flex>
    <MenuBar/>
    
  </Box>
   )

}
 



export default Navbar
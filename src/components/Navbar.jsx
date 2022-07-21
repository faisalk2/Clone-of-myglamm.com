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
import { OfferBar } from './OfferBar'
import '../AdilApp.css';

const Navbar = () => {
  return <Box className='navbar-sticky'   width='100%' >
    <OfferBar/>
    <Flex width='70%' direction='row' height='60px' margin='auto' pt='12px' >
      <Box> <Logo/> </Box>
      <Box> <SearchBar/> </Box>
      <Spacer/>
      <Box> <FaShoppingBag style={{color: 'black', border:'1px', fontSize: '40px'}}/> </Box>
      <Box> <AiOutlineUser style={{color: 'black', fontSize: '40px'}}/> </Box>
    </Flex>
    <MenuBar/>
    
  </Box>
}

export default Navbar
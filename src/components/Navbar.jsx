import React from 'react'
import { 
Spacer,
Flex,
Box,
Input } from '@chakra-ui/react'
import { Logo } from './Logo'
import { MenuBar } from './MenuBar'
import { SearchBar } from './SearchBar'


const Navbar = () => {
  return <Box border='1px solid black'  width='100%' >
    <Flex border='1px solid black' width='80%' direction='row' height='60px' margin='auto'>
      <Box> <Logo/> </Box>
      <Box> <SearchBar/> </Box>
      <Spacer/>
      <Box>1</Box>
    </Flex>
    <MenuBar/>
    
  </Box>
}

export default Navbar
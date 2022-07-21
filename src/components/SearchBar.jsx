import React from 'react'
import { 
Input,
Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
export const SearchBar = () => {

const onValueChange = (e) => {
  console.log(e.target.value);
}
  return (
    <Box display="flex" >
    <SearchIcon 
      backgroundColor='rgb(245,245,246)' 
      // border='1px' 
      // borderColor='gray.200' 
      p='1px' 
      h='40px' 
      borderRadius='6px 0px 0px 6px' 
      borderRight='none' 
    />     
    <Input
      onChange={onValueChange}
      variant='unstyled' 
      backgroundColor='rgb(245,245,246)'
      borderLeft='none'
      borderRadius='0px 6px 6px 0px'
      fontFamily={"Roboto"}
      fontWeight={"400"} 
      color='#333333'
      width={{ sm: '200px',
      md: '250',
      lg: '300px',
      xl: '350px',
      '2xl': '400px'
      }} 
      placeholder='Find Lipstick, Eyeliner, Makeup Tutorial, etc'
    />
    </Box>
  )
}

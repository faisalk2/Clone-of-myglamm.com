import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const MyBag = () => {
  return (
    <Box>
        <Text  fontSize='3xl'  paddingBottom={10}>MY BAG(1)</Text>
        <Box bg='black' padding='10px'w='100%'color='white' marginLeft='15%' justifyContent="center"display='flex'className='mujhko'  width="70%"  >
          <Text fontWeight="500" paddingRight="10px">Congrats! </Text>
          <Text paddingRight="10px"> You're eligible for free gift </Text>
          <Text fontWeight="500" paddingRight="10px">Please select.</Text> 
          </Box> 
       

          <Box bg='lightgrey' padding='10px'w='100%'color='white' marginLeft='15%' justifyContent="center-left"display='flex'className='mujhko'  width="70%"  >
          <Text fontWeight="500" paddingRight="10px">Congrats! </Text>
          <Text paddingRight="10px"> You're eligible for free gift </Text>
          <Text fontWeight="500" paddingRight="10px">Please select.</Text> 
          </Box> 
    </Box>
  )
}

// Congrats! You're eligible for free gift Please select.
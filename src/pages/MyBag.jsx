import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const MyBag = () => {
  return (
    <Box>
        <Text  fontSize='3xl'  paddingBottom={10}>MY BAG(1)</Text>
        <Box bg='black' padding='10px'w='100%'color='white' marginLeft='15%' justifyContent="center"display='flex'  width="70%"  >
          <Text fontWeight="500" paddingRight="10px">Congrats! </Text>
          <Text paddingRight="10px"> You're eligible for free gift </Text>
          <Text fontWeight="500" paddingRight="10px">Please select.</Text> 
          </Box> 
       

          <Flex bg='lightgrey' padding='15px 250px 15px 250px'w='100%'color='lightblack' justifyContent="space-between"display='flex'  width="100%"  >
       
          <Box display='flex'> <Text  paddingRight="10px">You will earn </Text>
          <Text paddingRight="10px" fontWeight="500" > ₹ 112 Good Points</Text>
          <Text  paddingRight="10px"> as cashback on this order.</Text> </Box>

          <Box display='flex'>
          <Text  paddingRight="10px">GRAND TOTAL</Text>
          <Text paddingRight="10px" fontWeight="500" > TOTAL</Text>
          </Box>
        

          </Flex> 
    </Box>
  )
}

// Congrats! You're eligible for free gift Please select.
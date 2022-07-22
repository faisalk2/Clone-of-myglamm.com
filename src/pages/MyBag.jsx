import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { FooterC } from '../components/FooterC'
import { Navigate as Mavigate, useNavigate } from 'react-router-dom';

export const MyBag = () => {
const navigate=useNavigate()
  
  return (
    <Box mt='10' mb='10'>
        <Text  fontSize='3xl'  paddingBottom={10}>MY BAG(1)</Text>
        <Box bg='black' padding='10px' marginBottom={10}w='100%'color='white' marginLeft='15%' width="70%"  >
        <Flex  justifyContent="center">
        <Text fontWeight={600} paddingRight="10px">Congrats! </Text>
          <Text paddingRight="10px"> You're eligible for free gift </Text>
          <Text fontWeight="600" paddingRight="10px">Please select.</Text> 
        </Flex>
        
          </Box> 
       
    <Flex  marginLeft='15%' gap='10' width="70%" mb='10' h='100'>
    <Box width='100px'> <Img  src='https://files.myglamm.com/site-images/original/Twstr-(1).jpg'/></Box>
        <Box mt='4%' w='40%'> TWIST IT MASCARA</Box>
        <Box mt='4%' w='10%' ml='5%'>Price</Box>
        <Box mt='3%' w='10%' >
        <NumberInput bg="lightgray" w='20'defaultValue={1} max={30} clampValueOnBlur={false}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
        </Box>
        <Box mt='4%'>Total</Box>
    </Flex>
          <Flex bg='lightgrey' marginBottom={10}padding='15px 250px 15px 250px'w='100%'color='lightblack' justifyContent="space-between"display='flex'  width="100%"  >
       
          <Box display='flex'> <Text  paddingRight="10px">You will earn </Text>
          <Text paddingRight="10px" fontWeight="600" > ₹ 112 Good Points</Text>
          <Text  paddingRight="10px"> as cashback on this order.</Text> </Box>

          <Box display='flex'>
          <Text  paddingRight="10px">GRAND TOTAL</Text>
          <Text paddingRight="10px" fontWeight="600" > TOTAL</Text>
          </Box>
        

          </Flex> 

          <Box bg='black' padding='10px'w='30%'color='white' marginLeft='35%' className='mujhko' onClick={()=>navigate("/address")}>PROCEED TO PAYMENT <ArrowForwardIcon/></Box>
         
    </Box>
  )
}

// Congrats! You're eligible for free gift Please select.
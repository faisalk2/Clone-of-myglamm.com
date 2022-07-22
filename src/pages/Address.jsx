import { Box, Flex, FormControl, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import './CheckOut.css'
export const Address = () => {
  return (
    <Box mt='10'>
     <Box className='Babulal'>
     <Text pb='5' p='3'borderBottom='1px solid lightgray' width='80%' margin="auto"textAllign="center" fontWeight={550}>Shipping Address</Text>
      <FormControl pt='5'>
      <Flex  pb='5'gap='7'>
        <Input type='name' h='55' bg='#FBFBFB' ml='7'placeholder="Name*" fontSize='13' isRequired></Input>
        <Input type='number'h='55' bg='#FBFBFB' placeholder="Mobile Number*" fontSize='13' isRequired></Input>
        <Input type='email'h='55' bg='#FBFBFB'mr='7'placeholder="Email Address" fontSize='13'></Input>
      </Flex>
      <Flex gap='7'  pb='5'>
      <Select placeholder='Other'h='55' bg='#FBFBFB' fontSize='13' ml='7'>
  <option value='option1'>Home</option>
  <option value='option2'>Office</option>
 </Select>
 <Input h='55' bg='#FBFBFB' fontSize='13'type='address' placeholder='Flat no. /House no. / Apt Name*
'></Input>
 <Input h='55' bg='#FBFBFB' fontSize='13'type='text' placeholder='Street name*
'></Input>
 <Input h='55' bg='#FBFBFB' fontSize='13'type='text' placeholder='Neighbourhood*
' mr='7'></Input>
      </Flex>
      <Flex gap='7'  pb='7'>
        <Input ml='7' h='55' bg='#FBFBFB' fontSize='13'type='number'placeholder='Pincode*
'></Input>
        <Input  h='55' bg='#FBFBFB' fontSize='13'type='text' placeholder='city'></Input>
        <Input  h='55' bg='#FBFBFB' fontSize='13'type='text'placeholder='state'></Input>
        <Input mr='7' h='55' bg='#FBFBFB' fontSize='13'type='text'placeholder='landmark'></Input>
      </Flex>
      </FormControl>
     </Box>
    </Box>
  )
}

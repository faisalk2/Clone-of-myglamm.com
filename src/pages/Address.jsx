import { Box, Flex, FormControl, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import './CheckOut.css'
export const Address = () => {
  return (
    <Box mt='5'>
     <Box className='Babulal'>
     <Text pb='3' p='3'borderBottom='1px solid lightgray' width='80%' margin="auto"textAllign="center" fontWeight={500}>Shipping Address</Text>
      <FormControl pt='5'>
      <Flex gap='5'>
        <Input type='name' ml='5'placeholder="Name" fontSize='13' isRequired></Input>
        <Input type='phone' placeholder="Mobile Number" fontSize='13' isRequired></Input>
        <Input type='email'mr='5'placeholder="Email Address" fontSize='13'></Input>
      </Flex>
      <Flex>
      <Select placeholder='Other'>
  <option value='option1'>Home</option>
  <option value='option2'>Office</option>
 </Select>
 <Input></Input>
 <Input></Input>
 <Input></Input>
      </Flex>
      </FormControl>
     </Box>
    </Box>
  )
}

import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import './CheckOut.css'
export const AddressCard = ({name,mobile, email, type,add, pincode,city,state}) => {
    const navigate=useNavigate()
  return (
    <Box className='mehudon shahrukh' lineHeight='10' fontSize={15} style={{width:"250px",height:"300px",fontFamily:'Monospace,Monaco'}} >
        <Text fontWeight="600">{type}</Text>
        <Text allign='center'>{name}</Text>
        <Text allign='center'>{add}</Text>
        <Flex justifyContent='center'>
        <Text>{city}</Text>    
        <Text>-{state}</Text>
        <Text>-{pincode}</Text>
        </Flex>
       <Flex justifyContent="center"><Box allign='center' mt='3'><BiPhoneCall/></Box><Text allign='center' display='flex'>{mobile} </Text></Flex>
        <Flex justifyContent="center"> <Box mt='3'><AiOutlineMail/></Box><Text allign='center'>{email}</Text></Flex>
    <Button align='bottom' bg='black' color='white' mt='2' onClick={()=>navigate("/checkout")} >Select</Button>
    </Box>
  )
}

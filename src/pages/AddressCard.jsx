import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const AddressCard = ({name,mobile, email, type,add, pincode,city,state}) => {
  return (
    <Box style={{width:"300px",height:"500px",fontFamily:'serif'}} >
        <Text fontWeight="600">{type}</Text>
        <Text allign='center'>{name}</Text>
        <Text allign='center'>{add}</Text>
        <Flex justifyContent='center'>
        <Text>{city}</Text>    
        <Text>{state}</Text>
        <Text>{pincode}</Text>
        </Flex>
        <Text allign='center'>{mobile}</Text>
        <Text allign='center'>{email}</Text>
    
    </Box>
  )
}

import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const AddressCard = ({name,mobile, email, type,add, pincode,city,state}) => {
  return (
    <Box>
        <Text>{type}</Text>
        <Text>{name}</Text>
        <Text>{add}</Text>
        <Flex>
        <Text>{city}</Text>    
        <Text>{state}</Text>
        <Text>{pincode}</Text>
        </Flex>
        <Text>{mobile}</Text>
        <Text>{email}</Text>
    
    </Box>
  )
}

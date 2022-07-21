import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

export const FooterC = () => {
  return (
    <Box>
        <Flex h='60px' justifyContent="center"marginTop="2%" paddingBottom="2%" borderTop="1px solid lightgray">
            <Img   paddingTop="3px"  filter="grayscale(1000%)" src='https://i.postimg.cc/D0YNFVRk/download.jpg'/>
            <Text   paddingTop="3px"  className="icon icon-mlogo">© MyGlamm</Text>
        </Flex>
    </Box>
  )
}

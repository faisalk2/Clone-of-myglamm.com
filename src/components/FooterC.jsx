import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'

export const FooterC = () => {
  return (
    <Box>
        <Flex h='20px' justifyContent="center"marginTop="2%" paddingBottom="2%" borderTop="1px solid lightgray">
            <Img style={{filter:" grayscale(200%)"}} filter="brightness(50%)" paddingTop="5px" src='https://i.postimg.cc/D0YNFVRk/download.jpg'/>
            <Text className="icon icon-mlogo">© MyGlamm</Text>
        </Flex>
    </Box>
  )
}

import React from 'react'
import {
    Box,
    Flex,
    Spacer
  } from '@chakra-ui/react';
  import { AiFillGift } from "react-icons/ai";
export const OfferBar = () => {
  return (
    <Box  width='100%' bg='rgb(254,232,232)' height='50px' display='flex' justifyContent='center' alignItems='center' pl='-3px' >       
        <Flex width='70%' margin='auto'  >
            <Box>
                <AiFillGift cursor='pointer' style={{color: 'rgb(255,168,168)', border:'1px', fontSize: '24px'}} />
            </Box>

            <Box fontFamily='Roboto' cursor='pointer' fontWeight='500' fontSize='14px' pl='13px' >  
                FLAT 199 STORE
            </Box>

            <Box fontFamily='Roboto' cursor='pointer' color= 'rgb(255,168,168)' fontWeight='500' fontSize='14px' pl='12px' >
                SHOP NOW
            </Box>
            <Spacer/>

            <Box fontFamily='Roboto' cursor='pointer' fontWeight='500' fontSize='13px'  >
                MY GLAMM STORE
            </Box>
        </Flex>       
    </Box>
  )
}

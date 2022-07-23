import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import React from 'react'
import './profile.css'
import { AiOutlineUser} from "react-icons/ai";
import { useDispatch } from 'react-redux/es/exports';
import { logoutuser } from '../reducer/AuthReducer/action';
const Profile = () => {
    const userDetail=localStorage.getItem("userData"); 
    const dispatch=useDispatch();
const handleLogOut=()=>{
dispatch(logoutuser());
}



  return (
    <Box  >
        <Menu   >
  <MenuButton as={Button} className="profiletext" colorScheme={"white"} color="black" rightIcon={<ChevronDownIcon />}>
  <Flex><AiOutlineUser marginRight="15px" style={{color: '#f7d100', fontSize: '20px'}}/>
    {userDetail}</Flex>
  </MenuButton>
  <MenuList>
    <MenuItem  >My Profile</MenuItem>
    <MenuItem>My Orders</MenuItem>
    <MenuItem>My Dashboard</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>MyGlammXo Party</MenuItem>
    <Button onClick={handleLogOut} width={"90%"}>Logout</Button>
  </MenuList>
</Menu>
    </Box>
  )
}

export default Profile
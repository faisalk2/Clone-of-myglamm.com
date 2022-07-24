import { Box, Button, Checkbox, Flex, FormControl, Grid, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './CheckOut.css'
import axios from 'axios'
import { AddressCard } from './AddressCard'
import { useNavigate } from 'react-router-dom'

export const Address = () => {
  const navigate=useNavigate()
  const[ ok,setOk]=useState(false)
  const [addresshe,setAddresshe]=useState({})
  const [add,setAdd]=useState("")
  const handleChange=({name,value})=>{
  
    setAddresshe({
      ...addresshe,
    [name]:value
    })
  }
  const addkro= async ()=>{
    setOk(true)
   await axios.post("https://aditya-fake-server.herokuapp.com/addresses",addresshe).then(()=>getkro()).catch((e)=>console.log(e))
  }
  const getkro= async()=>{
   await axios.get("https://aditya-fake-server.herokuapp.com/addresses",addresshe).then((res)=>{
      setAdd(res.data)
      console.log(add)
    
  }).catch((e)=>console.log(e))
  }
useEffect(()=>{
  
getkro()
  
},[])

const handleClick=()=>{

}
 
  return (
    <Box mt='10'className='mehudon' style={{zIndex:"-1"}} >
   {
    ok==true &&    <Flex fontSize='14' mb='10'justifyContent='center'>HOMESHOPPING / BAGCHOOSE /<Text fontWeight="600"> SHIPPING ADDRESS</Text></Flex>
   }
     <Box className='Babulal'>
     <Text pb='5' p='3'borderBottom='1px solid lightgray' width='70%' margin="auto"allign="center" fontWeight={550}>Shipping Address</Text>
   {
    ok===false && 
    <FormControl pt='5'>
    <Flex  pb='5'gap='7'>
      <Input type='name' h='55' bg='#FBFBFB' ml='7'placeholder="Name*" onChange={(e)=>handleChange(e.target)} name="name"fontSize='13' isRequired></Input>
      <Input  onChange={(e)=>handleChange(e.target)} type='number' name="mobile"h='55' bg='#FBFBFB' placeholder="Mobile Number*" fontSize='13' isRequired></Input>
      <Input  onChange={(e)=>handleChange(e.target)}type='email' name="email" h='55' bg='#FBFBFB'mr='7'placeholder="Email Address" fontSize='13'></Input>
    </Flex>
    <Flex gap='7'  pb='5'>
    <Select placeholder='Other'  onChange={(e)=>handleChange(e.target)}h='55' name="type" bg='#FBFBFB' fontSize='13' ml='7'>
<option value='Home'>Home</option>
<option value='Office'>Office</option>
</Select>
<Input h='55'  onChange={(e)=>handleChange(e.target)}bg='#FBFBFB' name="add" fontSize='13'type='address' placeholder='Flat no. /House no. / Apt Name*
'></Input>
<Input h='55'  onChange={(e)=>handleChange(e.target)}bg='#FBFBFB' fontSize='13'type='text' placeholder='Street name*
'></Input>
<Input h='55' onChange={(e)=>handleChange(e.target)} bg='#FBFBFB' fontSize='13'type='text' placeholder='Neighbourhood*
' mr='7'></Input>
    </Flex>
    <Flex gap='7'  pb='7'>
      <Input ml='7' onChange={(e)=>handleChange(e.target)} h='55' bg='#FBFBFB' name="pincode"fontSize='13'type='number'placeholder='Pincode*
'></Input>
      <Input  h='55' onChange={(e)=>handleChange(e.target)} bg='#FBFBFB' name="city" fontSize='13'type='text' placeholder='city'></Input>
      <Input  h='55' onChange={(e)=>handleChange(e.target)} bg='#FBFBFB' name="state"fontSize='13'type='text'placeholder='state'></Input>
      <Input mr='7'  onChange={(e)=>handleChange(e.target)}h='55' bg='#FBFBFB' fontSize='13'type='text'placeholder='landmark'></Input>
    </Flex>
    <Flex justifyContent={"end"} mr='7' pb='5'>
    <Checkbox >Mark as default</Checkbox></Flex>
    <Flex gap='5' justifyContent={"end"} mr='7' pb='5'>
    <Button p='0px 50px 0px 50px' h='55' bg='#FBFBFB' borderRadius='2%' fontSize='13'>BACK</Button>
    <Button p='0px 50px 0px 50px' h='55' bg='lightgray'borderRadius='2%'fontSize='13' onClick={addkro}>CONTINUE</Button>
    </Flex>
    </FormControl>
   }
  <Box>
 <Grid marginLeft='35px'  templateColumns='repeat(3,1fr)' gap={3}>
 {
    ok===true && 

    add.map((item)=>(
     
       <Grid  gap={2} key={item.id}>
       <AddressCard  onClick={(handleClick(item.id))} {...item}/>
       </Grid>
      )) 
   }
 </Grid>
  {
    ok==true &&
    <Flex ml='5%' gap='10'pt='10'pb='10'>
        <Button className='pehchanlo' bg='black' color='white'onClick={()=>window.location.reload()} >Add new address</Button>
    <Button color='gray'  onClick={()=>setOk(false)}>BACK</Button>
    </Flex>
  }
  </Box>
    
     </Box>




     
    </Box>
  )
}

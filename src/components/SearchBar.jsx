import React, { useState } from 'react'
import { 
Input,
Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux";
import { getdata } from '../reducer/AppReducer/action';
import { GET_DATA_FAILURE, GET_DATA_SUCCESS } from '../reducer/AppReducer/type';



export const SearchBar = () => {
  const [search,setSearch]=useState("")
  const navigate=useNavigate();
  const dispatch=useDispatch()


const onValueChange = (e) => {
  if(e.target.value!==Number)
  {
    setSearch(e.target.value);
  }
  // console.log(search);
}

const handleSearch=(e)=>{
if(e.keyCode===13)
{
  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let bag="";
  for(let i=0;i<search.length; i++)
  {
    for(let j=0; j<lower.length; j++)
    {
      if(search[i]===lower[j] || search[i]===upper[j])
      {
        bag=bag+lower[j];
      }
    }
  }
  
  dispatch(getdata(bag)).then(res=>{
    if(res.type===GET_DATA_SUCCESS)
    {
      console.log(res.payload);
      navigate(`/product/${search}`);
    }else if(res.type===GET_DATA_FAILURE)
    {
      navigate("*");
    }
  })
  
}
}




  return (
    <Box className='media' display="flex" border={"1px solid #e8e8e9"} borderRadius="5px" >
   <Box width={"60px"} bgColor="#f5f5f6">
   <SearchIcon 
      backgroundColor='rgb(245,245,246)' 
      // border='1px' 
      // borderColor='gray.200' 
      p='1px' 
      h='40px' 
      width={"25px"}
      // margin={"15px"}
      borderRadius='6px 0px 0px 6px' 
      borderRight='none' 
      color={"#c3c5cc"}
    /> 
    </Box>    
    <Input 
    // cursor={"pointer"}
    
    value={search}
      onChange={onValueChange}
      onKeyUp={(e)=>handleSearch(e)}
      variant='unstyled' 
      backgroundColor='rgb(245,245,246)'
      borderLeft='none'
      borderRadius='0px 6px 6px 0px'
      fontFamily={"Roboto"}
      fontWeight={"400"} 
      color='#333333'
      width={{ sm: '200px',
      md: '250',
      lg: '300px',
      xl: '350px',
      '2xl': '400px'
      }} 
      placeholder='Find Lipstick, Eyeliner, Makeup Tutorial, etc'
    />
    </Box>
  )
}

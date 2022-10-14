import { ArrowForwardIcon,CloseIcon } from "@chakra-ui/icons";
import { Box,  Button,  Flex, Heading, Img, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { datafrombag, detelebag } from "../reducer/AppReducer/action";
import { DELETE_BAGDATA_SUCCESS } from "../reducer/AppReducer/type";


export const MyBag = () => {
  // let ab;
  const [data,setData]=useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  console.log(data)
  const bag=useSelector((state)=>state.app.bag)
  console.log(bag)

const handleDelete=(ele)=>{
  dispatch(detelebag(ele._id)).then(res=>{
    if(res.type===DELETE_BAGDATA_SUCCESS)
    {
      dispatch(datafrombag())
    }
  })
let amount=data.reduce((sum,ele)=>{
  return sum+=ele.offerPrice*Number(ele.total)
  },0)
   setTotal(amount)
}

// useEffect(()=>{
 
//  let amount=data.reduce((sum,ele)=>{
//  return sum+=ele.offerPrice*Number(ele.total)
//  },0)
//   setTotal(amount)
// },[])




const Biomt=(e,id)=>{

setData(data=>data.map((ele)=>
ele._id===id?{...ele,total:Number(ele.total)+e}:ele
))
let amount=data.reduce((sum,ele)=>{
  
  return sum+=Number(ele.offerPrice)*Number(ele.total)
  },0)
   setTotal(amount)
}


useEffect(()=>{
  dispatch(datafrombag())
  
},[])
useEffect(()=>{
  setData(bag)
},[setData,bag])
useEffect(()=>{
  let amount=data.reduce((sum,ele)=>{
    return sum+=ele.offerPrice*Number(ele.total)
    },0)
     setTotal(amount)
},[data,setTotal])

useEffect(() => {
  localStorage.setItem("total", JSON.stringify(total));
}, [total]);



if(bag.length===0)
{
  return(
    <Box padding={"100px"} >
    <Heading>Opps Your bag is empty!</Heading>
    <Box padding={"30px"} display={"flex"} justifyContent="center"  width={"20%"} margin="auto"><Img height={"300px"} width="300px" src="https://files.myglamm.com/site-images/original/img-empty-shopping-cart.png" /></Box>
    </Box>
  )
}

  return (
    <Box mt="10" mb="10">
      <Text fontSize="3xl" paddingBottom={10}>
        MY BAG({data.length})
      </Text>
      <Box
        bg="black"
        padding="10px"
        marginBottom={10}
        w="100%"
        color="white"
        marginLeft="15%"
        width="70%"
      >
        <Flex justifyContent="center">
          <Text fontWeight={600} paddingRight="10px">
            Congrats!{" "}
          </Text>
          <Text paddingRight="10px"> You're eligible for free gift </Text>
          <Text fontWeight="600" paddingRight="10px">
            Please select.
          </Text>
        </Flex>
      </Box>

      <Flex marginLeft="15%" gap="10" width="70%" mb="10" direction={"column"}>
       {data.map((ele,i)=>{
        return (
          <Flex key={i} display={"flex"} textAlign={"center"} justifyContent="center" >
          <Box width="100px">
          {" "}
          <Img src={ele.img}/>
        </Box>
        <Box mt="4%" w="40%">
          {ele.name}
          
        </Box>
        <Box mt="4%" w="10%" ml="5%">
        ₹  {ele.offerPrice}
        </Box>
        <Box mt="3%" w="10%">
     
       <Flex> 
        <Button disabled={ele.total==10} onClick={()=>Biomt(1,ele._id)} >+</Button>
        <Text textAlign={"center"}margin="5px" >{ele.total}</Text>
        <Button disabled={ele.total<=1}  onClick={()=>Biomt(-1,ele._id)} >-</Button></Flex>
        </Box>
       
        <Box padding={"0px 5px 0px 5px"}  mt="4%">₹  {ele.total*ele.offerPrice}</Box>
        <Box mt="4%" marginLeft={"5%"} cursor="pointer" onClick={()=>handleDelete(ele)} ><CloseIcon/></Box>
          </Flex>
        )
       })}
      </Flex>
      <Flex
        bg="lightgrey"
        marginBottom={10}
        padding="15px 150px 15px 150px"
        color="lightblack"
        justifyContent="space-between"
        display="flex"
        width="100%"
      >
        <Box display="flex">
          {" "}
          <Text paddingRight="10px">You will earn </Text>
          <Text paddingRight="10px" fontWeight="600">
            {" "}
             {total} Good Points
          </Text>
          <Text paddingRight="10px"> as cashback on this order.</Text>₹ {Math.floor(total/10)}
        </Box>

        <Box display="flex">
          <Text paddingRight="10px">{" "} GRAND TOTAL</Text>
          <Text paddingRight="10px" fontWeight="600">
          ₹ {total}
          </Text>
        </Box>
      </Flex>

      <Box
        bg="black"
        padding="10px"
        w="30%"
        color="white"
        marginLeft="35%"
        className="mujhko"
        onClick={() => navigate("/address")}
      >
        PROCEED TO ADDRESS <ArrowForwardIcon />
      </Box>
    </Box>
  );
};

// Congrats! You're eligible for free gift Please select.

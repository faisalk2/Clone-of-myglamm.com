import { ArrowForwardIcon,CloseIcon } from "@chakra-ui/icons";
import { Box,  Flex, Heading, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import {
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
// } from "@chakra-ui/react";
// import { FooterC } from "../components/FooterC";
import { useNavigate } from "react-router-dom";
// import { BiHomeHeart } from "react-icons/bi";

export const MyBag = () => {
  const [data,setData]=useState([]);
  let ab;
  let data1 = JSON.parse(localStorage.getItem("bag"));
  console.log(data1);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  // const [value, setValue] = useState(1);
  // const Biomt = (e) => {
  //   // setValue(e);
  //   let x = e * total;
  //   setTotal(x);
  //   // console.log("x", x);
  // };
  useEffect(() => {
    localStorage.setItem("total", JSON.stringify(total));
  }, [total]);




const handleDelete=(ele)=>{
  let data1 = JSON.parse(localStorage.getItem("bag"));
 ab=data1.filter((e,i)=>{
  if(e.id!==ele.id)
  {
    return e
  }
})
localStorage.setItem("bag",JSON.stringify(ab))
 data1 = JSON.parse(localStorage.getItem("bag"));
setData(data1)
let amount=data1.reduce((sum,ele)=>{
  return sum+=ele.offerPrice
  },0)
   console.log(amount)
   setTotal(amount)
}

useEffect(()=>{
  setData(data1)
 let amount=data1.reduce((sum,ele)=>{
 return sum+=ele.offerPrice
 },0)
  setTotal(amount)
},[data1])


if(data1.length===0)
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
        MY BAG({data1.length})
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
          <Flex display={"flex"} textAlign={"center"} justifyContent="center" >
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
          {/* <NumberInput
            bg="lightgray"
            w="20"
            defaultValue={1}
            onChange={(e) => Biomt(e)}
            value={value}
            min={1}
            max={30}
            clampValueOnBlur={false}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput> */}
        
        </Box>
       
        <Box mt="4%">Total</Box>
        <Box mt="4%" marginLeft={"5%"} onClick={()=>handleDelete(ele)} ><CloseIcon/></Box>
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

import React, { useEffect, useState } from "react";
import "./HomePagecss/payment.css";
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Image,
  Flex,
  Input,
  ListItem,
  Text,
  UnorderedList,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMoneyBill,
  faMoneyBill1Wave,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer,toast, Slide } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
const Payment = () => {
const [details,setDetails]=useState({
  name:"",
  cardNumber:null,
  month:null,
  year:null,
  cv:null
})

const handleChange=()=>{

}



const navigate=useNavigate()
  
  const [paisa, setPaisa] = useState(0);
  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("total"));
    setPaisa(x);
  }, []);
  const notify = () =>{
    toast(" ✅ Payment successfull")
    setTimeout(()=>{
        navigate("/")
    },3000)
  }
  return (
    <Box mt='-12' ml='5%' w='90%' >
      <Box
        height={"150px"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Text fontSize={"30px"} mb='-7'>Payment</Text>
      </Box>
      <Box>
        <Flex direction={"row"}>
          <Box width={"30%"}>
            <Box width={"40%"} margin="auto" marginRight={"50px"}>
              <Text fontWeight={"bold"}>PAYMENT METHOD</Text>
              <UnorderedList spacing={3}>
                <Box width={"100%"} lineHeight="50px" textAlign="initial">
                  <ListItem fontSize={"14px"} className="listChange">
                    <FontAwesomeIcon color="#9f999f" icon={faCreditCard} />
                    <span margin="10px"> Credit or Debit Card</span>
                  </ListItem>
                  <ListItem fontSize={"14px"} className="listChange">
                    <FontAwesomeIcon color="#9f999f" icon={faGlobe} />
                    <span> Net Banking</span>
                  </ListItem>
                  <ListItem className="listChange">
                    <Flex fontSize={"14px"}>
                      <Image
                        width={"30px"}
                        height="30px"
                        src="https://files.myglamm.com/images/static/upi.png"
                      ></Image>
                      <span> Google Pay/ Phonepe/ UPI</span>
                    </Flex>
                  </ListItem>
                  <ListItem fontSize={"14px"} className="listChange">
                    <FontAwesomeIcon color="#9f999f" icon={faMoneyBill1Wave} />
                    <span> Wallets</span>
                  </ListItem>
                  <ListItem className="listChange">
                    <FontAwesomeIcon color="#9f999f" icon={faMoneyBill} />
                    <span> Cash On Delivery</span>
                  </ListItem>
                </Box>
              </UnorderedList>
            </Box>
          </Box>
          <Box width={"70%"} lineHeight="30px">
            <Box
              width={"80%"}
              // margin="auto"
              height="70px"
              border={"1px solid black"}
              borderRadius="5px"
              bgColor={"#fcf8ed"}
            >
              <Flex
                justifyContent={"space-between"}
                alignItems="center"
                padding={"15px"}
              >
                <Text fontWeight={"bold"}>Amount Payable</Text>
                <Text fontWeight={"bold"}>₹ {paisa}.00</Text>
              </Flex>
            </Box>
            <Box width={"80%"} lineHeight="80px">
              <Box>
                <Flex fontSize={"14px"} fontWeight={"bold"}>
                  <label>New Card</label>
                  <Input display={"none"}></Input>
                </Flex>
                <Flex
                  fontSize={"14px"}
                  justifyContent={"space-between"}
                  fontWeight={"bold"}
                >
                  <label width="300px">Card Number :</label>
                  <Input
                  name="cardNumber"
                  value={details.cardNumber}
                  onChange={(e)=>handleChange(e)}
                  type={"number"}
                    height={"60px"}
                    width={"80%"}
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    bgColor={"#f7f7f7"}
                  ></Input>
                </Flex>
                <Flex
                  direction="row"
                  fontSize={"14px"}
                  margin="auto"
                  justifyContent={"space-between"}
                  fontWeight={"bold"}
                >
                  <label>Cardholder’s Name :</label>

                  <Input
                    name="name"
                    value={details.name}
                    onChange={(e)=>handleChange(e)}
                  type={"text"}
                    height={"60px"}
                    width={"80%"}
                    placeholder="eg. Jennifer Gomes"
                    bgColor={"#f7f7f7"}
                  ></Input>
                </Flex>
                <Flex
                  fontSize={"14px"}
                  justifyContent={"space-between"}
                  fontWeight={"bold"}
                >
                  <Box>
                    <label>Validity :</label>
                    <Input
                      name="month"
                      value={details.month}
                      onChange={(e)=>handleChange(e)}
                      height={"60px"}
                      margin="0px 15px 0px 15px"
                      placeholder="MM"
                      width={"100px"}
                      bgColor={"#f7f7f7"}
                    ></Input>
                    <Input
                      name="year"
                      value={details.year}
                      onChange={(e)=>handleChange(e)}
                      height={"60px"}
                      placeholder="YY"
                      width={"100px"}
                      bgColor={"#f7f7f7"}
                    ></Input>
                  </Box>
                  <Box fontWeight={"bold"}>
                    <label>CV:</label>
                    <Input
                      name="cv"
                      value={details.cv}
                      onChange={(e)=>handleChange(e)}
                      marginLeft="15px"
                      height={"60px"}
                      placeholder="***"
                      bgColor={"#f7f7f7"}
                      width={"100px"}
                    ></Input>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box
        // border={"1px solid red"}
        width={"100%"}
        height="200px"
        alignItems="center"
        display={"flex"}
        justifyContent="center"
      >
        <Button width={"220px"}onClick={notify} color="white" height="60px" bgColor={"#595959"}>
          Pay ₹{paisa}.00
        </Button >
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        transition={Slide}
        type="success"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
         />
      </Box>
    
    </Box>
  );
};

export default Payment;

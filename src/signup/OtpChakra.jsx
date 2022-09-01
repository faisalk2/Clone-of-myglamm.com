import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Select,
  Input,
  ModalFooter,
  Flex,
  Image,
  Text,
  Box,
  //   Divider,
  PinInputField,
  PinInput,
  HStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "../reducer/AuthReducer/action";








function OtpChakra({onClickClose}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
const [detail,setDetail]=useState({
  fullName:"",
  email:""
});
const [n1,setN1]=useState();
  const [n2,setN2]=useState();
  const [n3,setN3]=useState();
  const [n4,setN4]=useState();
  const dispatch=useDispatch();

let bag=n1+""+n2+""+n3+""+n4;

const handleSubmit=()=>{
  if(bag==="7820")
  {
    if(detail.email && detail.fullName)
    {
      dispatch(loginuser(detail.fullName));
      onClickClose();
    }
  }else{
    alert("Please Enter Correct OTP")
  }
  
}

  return (
    <>
      {/* <Button  onClick={onOpen}>Continue</Button> */}
      <Button
        onClick={onOpen}
        margin={"30px 0 0 0"}
        width={"1000%"}
        color="white"
        bgColor="black"
      >
        Continue
      </Button>
      {/* <AiOutlineUser onClick={onOpen} style={{color: 'black', fontSize: '25px'}}/> */}
      <Modal
        width="500px"
        border="1px solid red"
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <Box marginTop="20px">
            <Text width={"80%"} textAlign="center" margin="auto">
              VERIFY YOUR MOBILE NUMBER TO SIGNIN
            </Text>
          </Box>
          <Image
            margin={" 20px 80px 20px 30%"}
            width="200px"
            src="https://www.myglamm.com/images/mob-otp.png"
          ></Image>
          <Text
            marginLeft="40%"
            paddingBottom="value"
            borderBottomStyle="solid"
            fontWeight="bold"
            fontSize="14px"
          >
            ENTER OTP 7820
          </Text>
          {/* <Divider borderColor={"black"}></Divider> */}
          <ModalCloseButton />
          <ModalBody display={"flex"} justifyContent={"center"} >
              
              <PinInput margin="0 10px 0 10px"    otp>
                <PinInputField value={n1} onChange={(e)=>setN1(e.target.value)}  />
                <PinInputField value={n2} onChange={(e)=>setN2(e.target.value)}  />
                <PinInputField value={n3} onChange={(e)=>setN3(e.target.value)}  />
                <PinInputField value={n4} onChange={(e)=>setN4(e.target.value)}  />
              </PinInput>
             
          </ModalBody>
          
              <Box width={"80%"} margin="auto">
              <Input type="text" placeholder="Enter Full Name" margin="15px 0 15px 0" value={detail.fullName} onChange={(e)=>setDetail({...detail,fullName:e.target.value})} />
              <Input type="email" placeholder="Enter Email" value={detail.email} onChange={(e)=>setDetail({...detail,email:e.target.value})} />
              </Box>
           
          <ModalFooter display={"flex"} alignItems={"center"}>
            <Button
             onClick={handleSubmit}
              margin={"30px 0 0 0"}
              width={"1000%"}
              color="white"
              bgColor="black"
            >
              VERIFY
            </Button>
          </ModalFooter>
          {/* <Flex><Text fontSize={"12px"} margin={"0px 0px 20px 60px"} >By Signing up you agree to our <span style={{fontWeight:"bold"}} >Term {"&"} Conditions</span></Text></Flex> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default OtpChakra;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
  Select,
  Input,
  ModalFooter,
  Flex,
  Image,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import OtpChakra from "./OtpChakra";

function SignupChakra({text=null}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobile, setMobile] = useState();

  return (
    <>
      <div onClick={()=>onOpen()} >
      {text ? text :<AiOutlineUser
        style={{ color: "black", fontSize: "25px" }}
      />}
      </div>
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
              Get 15% Good Points back on every order
            </Text>
          </Box>
          <Image
            margin={" 20px 100px 20px 100px"}
            width="200px"
            src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
          ></Image>
          <Text
            marginLeft="80px"
            paddingBottom="value"
            borderBottomStyle="solid"
            fontWeight="bold"
            fontSize="14px"
          >
            *Mobile Number
          </Text>
          <Divider borderColor={"black"}></Divider>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Select width={"150px"}>
                <option value="91">IND +91</option>
                <option value="971">UAR +971</option>
                <option value="44">UK +44</option>
                <option value="1">US +1</option>
              </Select>
              <Input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile Number"
              />
            </Flex>
          </ModalBody>
          <ModalFooter display={"flex"} alignItems={"center"}>
            {mobile?.length === 10 && (
              <OtpChakra cursor="pointer" onClickClose={onClose} />
            )}
          </ModalFooter>
          <Flex>
            <Text fontSize={"12px"} margin={"0px 0px 20px 60px"}>
              By Signing up you agree to our{" "}
              <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                Term {"&"} Conditions
              </span>
            </Text>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignupChakra;

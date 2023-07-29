import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

export const AddressCard = ({
  _id,
  name,
  mobileNumber,
  email,
  addressType,
  street,
  pinCode,
  city,
  state,
  handleDelete,
}) => {
  const navigate = useNavigate();
  return (
    <Box className="addressCard" lineHeight="8" fontSize={15}>
      <div
        onClick={() => handleDelete(_id)}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <TiDeleteOutline size={22} style={{ cursor: "pointer" }} />
      </div>
      <Text fontWeight="600">{addressType}</Text>
      <Text align="center">{name}</Text>
      <Text align="center">{street}</Text>
      <Flex justifyContent="center">
        <Text>{city}</Text>
        <Text>-{state}</Text>
        <Text>-{pinCode}</Text>
      </Flex>
      <Flex justifyContent="center">
        <Box align="center" mt="3">
          <BiPhoneCall />
        </Box>
        <Text align="center" display="flex">
          {mobileNumber}{" "}
        </Text>
      </Flex>
      <Flex justifyContent="center">
        {" "}
        <Box mt="3">
          <AiOutlineMail />
        </Box>
        <Text align="center">{email}</Text>
      </Flex>
      <Button
        align="bottom"
        bg="black"
        color="white"
        mt="2"
        onClick={() => navigate("/proceed/checkout",{state:{name,street,mobileNumber,email,city,state,pinCode}})}
      >
        Select
      </Button>
    </Box>
  );
};

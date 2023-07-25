import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

export const AddressCard = ({
  name,
  mobileNumber,
  email,
  addressType,
  street,
  pinCode,
  city,
  state,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      className="addressCard"
      lineHeight="8"
      fontSize={15}
    >
      <Text fontWeight="600">{addressType}</Text>
      <Text allign="center">{name}</Text>
      <Text allign="center">{street}</Text>
      <Flex justifyContent="center">
        <Text>{city}</Text>
        <Text>-{state}</Text>
        <Text>-{pinCode}</Text>
      </Flex>
      <Flex justifyContent="center">
        <Box allign="center" mt="3">
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
        <Text allign="center">{email}</Text>
      </Flex>
      <Button
        align="bottom"
        bg="black"
        color="white"
        mt="2"
        onClick={() => navigate("/proceed/checkout")}
      >
        Select
      </Button>
    </Box>
  );
};

import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  Img,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./CheckOut.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

export const CheckOut = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [finalAmount, setFinalAmount] = useState(0);
  const bag = useSelector((state) => state.app.bag);
  const [disableBtn, setDisableBtn] = useState(false);
  const { handleSliderValue, location } = useOutletContext();
  const toast = useToast();

  const handleProceedPayment = () => {
    return navigate("/proceed/payment");
  };

  const handlePromo = () => {
    let amount = finalAmount * 0.4;
    amount = finalAmount - amount;
    setFinalAmount(amount);
    setDisableBtn(true);
    toast({
      title: "",
      description: "Promo code applied",
      position: "top",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    localStorage.setItem("total", JSON.stringify(amount));
  };

  useEffect(() => {
    if (location.pathname === "/proceed/checkout") {
      handleSliderValue(63);
    }
  }, [location]);

  useEffect(() => {
    setData(bag);
    let x = JSON.parse(localStorage.getItem("total"));
    setFinalAmount(x);
  }, [bag]);

  return (
    <Box initialColorMode="light" mt="10" marginBottom={150}>
      <Text fontSize="3xl" paddingBottom={10} fontFamily="sans-serif">
        Checkout
      </Text>

      <Flex>
        <Box w="55%">
          <Box
            textAlign={"center"}
            paddingLeft="40%"
            paddingTop="5%"
            paddingBottom={10}
          >
            <Flex>
              <Text paddingTop="10px">Already have an Account?</Text>
              <Text
                marginLeft="15%"
                fontSize="12px"
                padding="12px 40px 12px 40px"
                className="btnStyle"
                top="0"
                border="1.5px solid black"
              >
                SIGN IN
              </Text>
            </Flex>
          </Box>
          <Text
            fontWeight="600"
            fontSize={16}
            borderBottom="1px solid lightgray"
            textAlign={"left"}
            w="70%"
            justifyContent="center"
            ml="145"
            pb={3}
          >
            YOUR ORDERS
          </Text>
          {data?.map((ele, i) => (
            <Flex
              key={i}
              borderBottom="1px solid lightgray"
              mt="5"
              justifyContent="center"
              ml="145"
              w="70%"
            >
              <Box width="100px" p={2}>
                <Img borderRight="1px solid lightgray" src={ele.img} />
              </Box>
              <Box mt="4%" w="40%" pr="2">
                {ele.name}
              </Box>
              <Box mt="4%" w="10%" ml="5%" pr="2">
                {ele.total}
              </Box>
              <Box mt="4%" w="10%" ml="5%" pr="2">
                ₹ {ele.offerPrice}
              </Box>
            </Flex>
          ))}
        </Box>
        <Box
          bg={theme.colors.primary.women}
          padding="2%"
          lineHeight="300%"
          w="30%"
        >
          <Text fontWeight="500" textAlign="left">
            Apply Promo Code
          </Text>
          <Flex>
            <Input
              type="textarea"
              className="applyTextArea "
              placeholder="PROMO CODE"
              autocapitalize="true"
              spellcheck="false"
              autocomplete="false"
              defaultValue={"GLAMM40"}
              readOnly={true}
            />
            <Button
              id="applyButton"
              onClick={handlePromo}
              disabled={disableBtn}
            >
              {" "}
              APPLY
            </Button>
          </Flex>
          <Flex id="discountApply">
            <h3>Discount</h3>
            <p id="discountAmount">-₹00.00</p>
          </Flex>
          <Text fontWeight="500" textAlign="left">
            Order Summary
          </Text>
          <Box lineHeight="200%" paddingBottom={7}>
            <Flex justifyContent="space-between">
              <Box>Actual Amount</Box>
              <Box textAlign="right">Amount</Box>
            </Flex>
            <Flex justifyContent="space-between">
              <Box>Shipping Charges</Box>
              <Box align="right">FREE</Box>
            </Flex>
            <Flex justifyContent="space-between">
              <Box>Discount coupon</Box>
              <Text textAlign="center"> discount amount</Text>
            </Flex>
          </Box>
          <Flex justifyContent="space-between">
            <Box lineHeight="150%" paddingBottom={7}>
              <Box fontWeight="600" textAlign="left">
                Amount to Pay
              </Box>
              <Box color={theme.colors.primary.main}>
                Note: Inclusive of all taxes
              </Box>
            </Box>
            <Box float="right" fontWeight="600">
              Final amount: {finalAmount}
            </Box>
          </Flex>
          <Box
            bg="black"
            padding="3px"
            w="100%"
            color="white"
            onClick={handleProceedPayment}
            className="btnStyle"
          >
            PROCEED TO PAYMENT <ArrowForwardIcon />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

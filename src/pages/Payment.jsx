import React from "react";
import "./HomePagecss/payment.css";
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
const Payment = () => {
  return (
    <Box bgColor={"white"}>
      <Box
        height={"150px"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Text fontSize={"30px"}>Payment</Text>
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
                <Text fontWeight={"bold"}>₹1033.33</Text>
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
                      height={"60px"}
                      margin="0px 15px 0px 15px"
                      placeholder="MM"
                      width={"100px"}
                      bgColor={"#f7f7f7"}
                    ></Input>
                    <Input
                      height={"60px"}
                      placeholder="YY"
                      width={"100px"}
                      bgColor={"#f7f7f7"}
                    ></Input>
                  </Box>
                  <Box fontWeight={"bold"}>
                    <label>CV:</label>
                    <Input
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
        <Button width={"220px"} color="white" height="60px" bgColor={"#595959"}>
          Pay ₹1273.00
        </Button>
      </Box>
      <Box>
        <Box width={"80%"} margin={"auto"}>
          <Divider borderColor={"gray"} />
        </Box>
      </Box>
      <Flex marginTop="20px" justifyContent={"center"} fontSize={"13px"}>
        <Image
          width={"30px"}
          src="data:image/jpeg;base64,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"
        ></Image>{" "}
        © MyGlamm
      </Flex>
    </Box>
  );
};

export default Payment;

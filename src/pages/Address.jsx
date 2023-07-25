import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Grid,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./CheckOut.css";
import axios from "axios";
import { AddressCard } from "./AddressCard";
import { useNavigate, useOutletContext } from "react-router-dom";

const initialData = {
  name: null,
  addressType: null,
  email: null,
  mobileNumber: null,
  pinCode: null,
  street: null,
  neighborhood: null,
  city: null,
  state: null,
  houseNumber: null,
  landMark: null,
};

export const Address = () => {
  const [ok, setOk] = useState(false);
  const [address, setAddress] = useState(initialData);
  const [add, setAdd] = useState();
  const toast = useToast();
  const { handleSliderValue, location } = useOutletContext();

  const handleChange = (name, value) => {
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleAdd = async () => {
    if (Object.values(address)?.filter(Boolean).length === 0) {
      toast({
        title: "",
        description: "please fill all fields",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    await axios
      .post("https://myglamserver-production.up.railway.app/address/post", address)
      .then(() => getData())
      .catch((e) => console.log(e));
  };

  const getData = async () => {
    await axios
      .get("https://myglamserver-production.up.railway.app/address", address)
      .then((res) => {
        if (res.data.length > 0) {
          setOk(true);
        }
        setAdd(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (location.pathname === "/proceed/address") {
      handleSliderValue(45);
    }
  }, [location]);

  return (
    <Box mt="10" marginBottom={320} className="" style={{ zIndex: "-1" }}>
      {ok === true && (
        <Flex fontSize="14" mb="10" justifyContent="center">
          HOMESHOPPING / BAGCHOOSE /
          <Text fontWeight="600"> SHIPPING ADDRESS</Text>
        </Flex>
      )}
      <Box className="addressForm">
        <Text
          pb="5"
          p="3"
          borderBottom="1px solid lightgray"
          width="70%"
          margin="auto"
          allign="center"
          fontWeight={550}
        >
          Shipping Address
        </Text>
        {ok === false && (
          <FormControl pt="5">
            <Flex pb="5" gap="7">
              <Input
                type="name"
                h="55"
                bg="#FBFBFB"
                ml="7"
                placeholder="Name*"
                onChange={(e) => handleChange("name", e.target.value)}
                fontSize="13"
                isRequired
              />
              <Input
                onChange={(e) => handleChange("mobileNumber", e.target.value)}
                type="number"
                name="mobile"
                h="55"
                bg="#FBFBFB"
                placeholder="Mobile Number*"
                fontSize="13"
                isRequired
              />
              <Input
                onChange={(e) => handleChange("email", e.target.value)}
                type="email"
                name="email"
                h="55"
                bg="#FBFBFB"
                mr="7"
                placeholder="Email Address"
                fontSize="13"
              />
            </Flex>
            <Flex gap="7" pb="5">
              <Select
                placeholder="Other"
                onChange={(e) => handleChange("addressType", e.target.value)}
                h="55"
                name="type"
                bg="#FBFBFB"
                fontSize="13"
                ml="7"
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
              </Select>
              <Input
                h="55"
                onChange={(e) => handleChange("houseNumber", e.target.value)}
                bg="#FBFBFB"
                fontSize="13"
                placeholder="Flat no. /House no. / Apt Name*"
              />
              <Input
                h="55"
                onChange={(e) => handleChange("street", e.target.value)}
                bg="#FBFBFB"
                fontSize="13"
                placeholder="Street Name*"
              />
              <Input
                h="55"
                onChange={(e) => handleChange("neighborhood", e.target.value)}
                bg="#FBFBFB"
                fontSize="13"
                placeholder="Neighborhood*"
                mr="7"
              />
            </Flex>
            <Flex gap="7" pb="7">
              <Input
                ml="7"
                onChange={(e) => handleChange("pinCode", e.target.value)}
                h="55"
                bg="#FBFBFB"
                fontSize="13"
                type="number"
                placeholder="Pin Code*
"
              ></Input>
              <Input
                h="55"
                onChange={(e) => handleChange("city", e.target.value)}
                bg="#FBFBFB"
                fontSize="13"
                placeholder="City"
              />
              <Input
                h="55"
                onChange={(e) => handleChange("state", e.target.value)}
                bg="#FBFBFB"
                name="state"
                fontSize="13"
                type="text"
                placeholder="State"
              />
              <Input
                mr="7"
                onChange={(e) => handleChange("landMark", e.target.value)}
                h="55"
                bg="#FBFBFB"
                fontSize="13"
                type="text"
                placeholder="Landmark"
              />
            </Flex>
            <Flex justifyContent={"end"} mr="7" pb="5">
              <Checkbox>Mark as default</Checkbox>
            </Flex>
            <Flex gap="5" justifyContent={"end"} mr="7" pb="5">
              <Button
                p="0px 50px 0px 50px"
                h="55"
                bg="#FBFBFB"
                borderRadius="2%"
                fontSize="13"
                onClick={() => {
                  if (add.length > 0) {
                    setOk(true);
                  }
                }}
              >
                BACK
              </Button>
              <Button
                p="0px 50px 0px 50px"
                h="55"
                bg="lightgray"
                borderRadius="2%"
                fontSize="13"
                onClick={handleAdd}
              >
                CONTINUE
              </Button>
            </Flex>
          </FormControl>
        )}
        <Box>
          <Grid marginLeft="35px" templateColumns="repeat(3,1fr)" gap={3}>
            {ok === true &&
              add?.map((item) => (
                <Grid gap={2} key={item.id}>
                  <AddressCard {...item} />
                </Grid>
              ))}
          </Grid>
          {ok === true && (
            <Flex ml="5%" gap="10" pt="10" pb="10">
              <Button
                className="pehchanlo"
                bg="black"
                color="white"
                onClick={() => setOk(false)}
              >
                Add new address
              </Button>
            </Flex>
          )}
        </Box>
      </Box>
    </Box>
  );
};

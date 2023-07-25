import { Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

export const FooterC = () => {
  return (
    <div style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
      <Flex
        h="60px"
        justifyContent="center"
        marginTop="2%"
        paddingBottom="2%"
        borderTop="1px solid lightgray"
      >
        <Img
          paddingTop="3px"
          filter="grayscale(1000%)"
          src="https://i.postimg.cc/D0YNFVRk/download.jpg"
        />
        <Text padding="3px" >
          © MyGlamm
        </Text>
      </Flex>
    </div>
  );
};

import React from "react";
import { Box, Flex, Image, Text, AspectRatio } from "@chakra-ui/react";
import Check from "../mainCrausel/Check";
import "./HomePagecss/homePage.css";
import "../App.css";
import ProductCarousel from "../mainCrausel/ProductCarousel";
import {
  CATEGORIES,
  kitsAndCombo,
  inTheSportLight,
  ESSENTIALBUDGETBUYS,
  WALLETOFFERS,
  BANKPARTNER,
} from "./HomePagecss/homepageData";

const Home = () => {
  return (
    <Box>
      {/* Top main carousel of the website */}
      <Box w="100%" p={4} color="white">
        <Check />
      </Box>
      <Box padding={"30px"}>
        <Flex
          direction={"column"}
          margin="auto"
          width="70%"
          // border={"1px solid red"}
          gap={"20px"}
        >
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/proposition-banner-2240x614_1.jpg"
              width={"1100px"}
              height="250px"
            ></Image>
          </Box>
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/1920x527-(6).jpg"
              width={"1100px"}
              height="250px"
            ></Image>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            IN THE SPOTLIGHT
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"230px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          {inTheSportLight.map((item) => {
            return (
              <Box
                width="400px"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="250px"
                backgroundImage={`url(${item.image})`}
                display="flex"
                alignItems="end"
              >
                <Box className="popUp" width={"100%"} opacity="80%" height={"50px"}  textAlign={"center"} backgroundColor={"white"}  >
                  <Text  margin="auto" fontWeight="bold" fontSize={"xl"} opacity={"100%"} >{item.name}</Text>
                  <Text className="popUpText" opacity={"0%"} >{item.name}</Text>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            BESTSELLERS
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"190px"}
            />
          </Text>
        </Box>
        <ProductCarousel />
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            ESSENTIAL BUDGET BUYS
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"330px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          {ESSENTIALBUDGETBUYS.map((item) => {
            return (
              <Box
                width="400px"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="250px"
                backgroundImage={`url(${item.image})`}
                display="flex"
                alignItems="end"
              >
                <Box className="popUp" width={"100%"} opacity="80%" height={"50px"}  textAlign={"center"} backgroundColor={"white"}  >
                  <Text  margin="auto" fontWeight="bold" fontSize={"xl"} opacity={"100%"} >{item.name}</Text>
                  <Text className="popUpText" opacity={"0%"} >{item.name}</Text>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            SHOP FROM CATEGORIES
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"320px"}
            />
          </Text>
        </Box>
        <Box cursor={"pointer"} margin={"20px 0px 30px 0px"}>
          <Flex
            direction={"row"}
            width={"80%"}
            margin="auto"
            justifyContent={"space-between"}
          >
            {CATEGORIES.map((item) => {
              return (
                <Box>
                  <Box
                    borderRadius={"50%"}
                    padding="5px"
                    border={"1px solid #d4d4d4"}
                  >
                    <Image
                      borderRadius={"50%"}
                      width={"100px"}
                      height="100px"
                      src={item.image}
                    ></Image>
                  </Box>
                  <Text fontSize={"15px"} fontWeight="bold">
                    {item.name}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>

      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            WALLET OFFERS
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"220px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          {WALLETOFFERS.map((item) => {
            return (
              <Box
                width="400px"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="250px"
                backgroundImage={`url(${item.image})`}
              ></Box>
            );
          })}
        </Flex>
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            KITS {"&"} COMBOS
            <Box
              cursor={"pointer"}
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"210px"}
            />
          </Text>
        </Box>
        <Flex
          cursor={"pointer"}
          width={"80%"}
          margin="auto"
          height={"350px"}
          gap={"30px"}
          justifyContent="space-between"
          marginBottom={"20px"}
        >
          {kitsAndCombo.map((item) => {
            return (
              <Box
                lineHeight={"40px"}
                borderRadius="10px"
                width="30%"
                height="350px"
                bgColor={"white"}
                className="boxShadow"
              >
                {/* <Box> */}
                <Image
                  width={"100%"}
                  height="70%"
                  borderTopLeftRadius="10px"
                  borderTopRightRadius="10px"
                  src={item.image}
                ></Image>
                {/* </Box> */}

                <Text fontWeight={"bold"}>{item.name}</Text>
                <Text fontSize={"13px"}>{item.name}</Text>
              </Box>
              // </Box>
            );
          })}
        </Flex>
      </Box>
      {/*  */}
      <Box>
        <Box padding={"10px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            BANK PARTNER
            <Box
              bgImage="linear-gradient(white, #fbbcbc)"
              height="20px"
              margin="auto"
              marginTop="-20px"
              width={"210px"}
            />
          </Text>
        </Box>
        <Flex className="flexBoxForHome">
          {BANKPARTNER.map((item) => {
            return (
              <Box
                width="400px"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="250px"
                backgroundImage={`url(${item.image})`}
              ></Box>
            );
          })}
        </Flex>
      </Box>
      <Box padding={"30px"} cursor="pointer">
        <Flex
          direction={"column"}
          margin="auto"
          width="81%"
          // border={"1px solid red"}
          gap={"20px"}
        >
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/Community-Banner-2240-x-344_1.jpg"
              width={"100%"}
              height="190px"
            ></Image>
          </Box>
        </Flex>
      </Box>
      <Box padding={"30px"}>
        <Flex
          cursor={"pointer"}
          direction={"column"}
          margin="auto"
          width="71%"
          // border={"1px solid red"}
          gap={"20px"}
        >
          <Box>
            <Image
              src="https://files.myglamm.com/site-images/original/disclaimer-mgp_1.png"
              width={"100%"}
              height="250px"
            ></Image>
          </Box>
        </Flex>
      </Box>
      <Box>
        <AspectRatio maxW="100%" height="600px" ratio={1}>
          <iframe
            src="https://www.youtube.com/embed/GdcxfyKNiDg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=GdcxfyKNiDg"
            width="560"
            height="315"
            title="Shraddha Kapoor Wants You To #TellMyGlammWhatYouWant | MyGlamm TV Ad"
            frameborder="0"
          ></iframe>
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Home;

import React from 'react'
import './productCrousel.css'
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {carouselData} from "../pages/HomePagecss/homepageData"
import {Link as RouteLink} from 'react-router-dom'




// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { StarIcon } from "@chakra-ui/icons";

// Settings for the slider
const settings = {
  //   dots: true,
  arrows: false,
  //   fade: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function ProductCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();
 

 

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "10%", md: "0px" });


  return (
    <Box
    
      margin={"auto"}
      position={"relative"}
      height={"550px"}
      marginBottom="-90px"
      width={"80%"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        color={"black"}
        bgColor={"white"}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="black"
        color={"black"}
        bgColor={"white"}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider height="400px" {...settings} ref={(slider) => setSlider(slider)}>
        {carouselData.map((item, index) => (
          <RouteLink to="/product/MAKEUP">
            <Box
          cursor={"pointer"}
          className="box"
            key={index}
          >
            <Box
            className="hoverProperty singleProduct"
            >
              <Image
                className="productCarouselImage"
                src={item.image}
              />
              <Box padding={"10px"} boxSizing="border-box" lineHeight={"35px"} bgColor="white" >
                <Text fontWeight={"bold"} fontSize="15px" className="carouselSubtitle"  >
                  {item.name}
                </Text>
                <Box>
                  <Box>
                    <Text
                     className="carouselSubtitle"
                    >
                      {item.subtitle}
                    </Text>
                  </Box>
                  <Flex justifyContent={"space-evenly"}>
                    <Text className='avgrating' fontWeight={"bold"}>
                      {item["avgrating"]}{" "}
                      <StarIcon fontSize={"17px"} color={"#ff9797"} />{" "}
                    </Text>
                    <Text
                      className="carouselTotalRating"
                    >
                      {item["totalratings"]} ratings
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    justifyContent={
                      item.actualPrice ? "space-evenly" : "center"
                    }
                    alignItems="center"
                  >
                    <Text fontWeight={"bold"} fontSize="18px">
                      ₹{item.offerPrice}
                    </Text>
                    <Text textDecoration={"line-through"} fontSize="14px">
                      {item.actualPrice && `₹${item.actualPrice}`}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
          </RouteLink>
        ))}
      </Slider>
    </Box>
  );
}

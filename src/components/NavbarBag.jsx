import {
  Box,
  Img,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import "./ShaanCss.css";
import { useNavigate } from "react-router-dom";
function NavbarBag(value) {
  const [sliderValue, setSliderValue] = React.useState((value = 20));
const navigate=useNavigate()
  const handleNavigate = () => {
   return navigate('/')
  };

  return (
    <Box display="flex" className="shaanc">
      <div onClick={()=>handleNavigate()} style={{cursor:'pointer',margin:'0 100px'}}>
        <Img
          alt="logo"
          className="m-auto"
          marginTop="10%"
          h="40px"
          src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
        />
      </div>
      <Box padding={'30px 0px 30px 50px'}  width="60%">
        <Slider
          paddingBottom="100px"
          id="slider"
          defaultValue={25}
          min={0}
          max={100}
          colorScheme="teal"
          onChange={(v) => setSliderValue(v)}
        >
          <SliderMark value={20} mt="2" ml="2.5" fontSize="sm">
            SHOPPING BAG
          </SliderMark>
          <SliderMark value={40} mt="2" ml="-2.5" fontSize="sm">
            SELECT ADDRESS
          </SliderMark>
          <SliderMark value={60} mt="2" ml="-2.5" fontSize="sm">
            CHECKOUT
          </SliderMark>
          <SliderMark value={80} mt="2" ml="-2.5" fontSize="sm">
            PAYMENT
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack bg="black" />
          </SliderTrack>
          <Tooltip hasArrow bg="teal.500" color="white" placement="top">
            <SliderThumb borderRadius="50%" border="5px solid lightgray" />
          </Tooltip>
        </Slider>
      </Box>
    </Box>
  );
}
export default NavbarBag;

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
import React, { useState } from "react";
import "./ShaanCss.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FooterC } from "./FooterC";
function ProceedNav({ value }) {
  const [sliderValue, setSliderValue] = useState(25);
  const navigate = useNavigate();
  const location=useLocation()
  const handleNavigate = () => {
    return navigate("/");
  };

  const handleSliderValue = (value) => {
    setSliderValue(value);
  };

  // console.log(location)

  return (
    <>
      <Box display="flex" className="shaanc">
        <div
          onClick={handleNavigate}
          style={{ cursor: "pointer", margin: "0 100px" }}
        >
          <Img
            alt="logo"
            className="m-auto"
            marginTop="10%"
            h="40px"
            src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
          />
        </div>
        <Box padding={"30px 0px 30px 50px"} width="60%">
          <Slider
            paddingBottom="100px"
            id="slider"
            defaultValue={25}
            value={sliderValue}
            min={0}
            max={100}
            colorScheme="teal"
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
      <div>
        <Outlet context={{handleSliderValue,location}} />
      </div>
      <FooterC />
    </>
  );
}
export default ProceedNav;

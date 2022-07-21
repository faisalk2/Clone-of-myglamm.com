import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import React from 'react'

function NavbarC() {
  const [sliderValue, setSliderValue] = React.useState(20)
 
  return (
    <Box padding="0px 300px 50px 300px" filter="grayscale(100%)">
      <Slider
      id='slider'
      defaultValue={25}
      min={0}
      max={100}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
   
    >
      <SliderMark value={20} mb='10' ml='2.5' fontSize='sm'>
      SHOPPING BAG
      </SliderMark>
      <SliderMark value={40} mt='1' ml='-2.5' fontSize='sm'>
      SELECT ADDRESS
      </SliderMark>
      <SliderMark value={60} mt='1' ml='-2.5' fontSize='sm'>
      CHECKOUT
      </SliderMark>
      <SliderMark value={80} mt='1' ml='-2.5' fontSize='sm'>
      PAYMENT
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack bg='black'/>
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        
       
      >
        <SliderThumb borderRadius='50%' border='5px solid lightgray'/>
      </Tooltip>
    </Slider>
    </Box>
  )
}
export default NavbarC
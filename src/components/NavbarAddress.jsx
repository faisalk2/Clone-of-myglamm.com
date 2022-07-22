import { Box, Flex, Img, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import React from 'react'
import './ShaanCss.css'
function NavbarAddress(value) {
  const [sliderValue, setSliderValue] = React.useState(value=20)
 
  return (



    <Box display="flex" className='shaanc'>
      <Box>
      <Img alt="logo" className="m-auto"marginTop='3%' h='50px'marginLeft="150%"src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" />
      </Box>
    <Box padding="20px 300px 30px 300px"   width="100%">
      <Slider paddingBottom='100px'
      id='slider'
      defaultValue={45}
      min={0}
      max={100}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
   
    >
      <SliderMark value={20} mt='2' ml='2.5' fontSize='sm'>
      SHOPPING BAG
      </SliderMark>
      <SliderMark value={40} mt='2' ml='-2.5' fontSize='sm'>
      SELECT ADDRESS
      </SliderMark>
      <SliderMark value={60} mt='2' ml='-2.5' fontSize='sm'>
      CHECKOUT
      </SliderMark>
      <SliderMark value={80} mt='2' ml='-2.5' fontSize='sm'>
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
    </Box>
  )
}
export default NavbarAddress
import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react'
import React from 'react'

function NavbarC() {
  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  return (
    <Box padding="0px 300px 0px 300px" filter="grayscale(100%)">
      <Slider
      id='slider'
      defaultValue={25}
      min={0}
      max={100}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={20} mb='1' ml='2.5' fontSize='sm'>
        25%
      </SliderMark>
      <SliderMark value={40} mt='1' ml='-2.5' fontSize='sm'>
        50%
      </SliderMark>
      <SliderMark value={60} mt='1' ml='-2.5' fontSize='sm'>
        75%
      </SliderMark>
      <SliderMark value={80} mt='1' ml='-2.5' fontSize='sm'>
        100%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
    </Box>
  )
}
export default NavbarC
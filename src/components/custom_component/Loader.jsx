import { Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Spinner size="xl" />
    </div>
  )
}

export default Loader
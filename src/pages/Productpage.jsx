import React from 'react'
import { useParams } from 'react-router-dom'

const Productpage = () => {
const {type}=useParams()
let name=type.toUpperCase()
  return (
    <div>{name}</div>
  )
}

export default Productpage
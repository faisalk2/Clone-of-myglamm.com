import React from 'react'
import { useParams } from 'react-router-dom'
import Product from "../components/products/Product"

const Productpage = () => {
const {type}=useParams()
let name=type.toUpperCase()
  return (
    <ProductItem />
  )
}

export default Productpage
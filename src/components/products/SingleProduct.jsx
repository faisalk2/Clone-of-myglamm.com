import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"; 
import "./SingleProduct.css";

 const bagFromLocalStorage = JSON.parse(localStorage.getItem("bag") || "[]");

const SingleProduct = () => {
  const [singleProduct, setsingleProduct] = useState({});
  const [bag, setBag] = useState(bagFromLocalStorage);
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    axios
      .get(``)
      .then(({ data }) => {
        setsingleProduct(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  const addToBag = (singleProduct) => {
    setBag([...bag, singleProduct]);
    alert("Added to Bag");
  }; 

  return (
   <div className="container">
      <div className="left">
          <img src={singleProduct.img} alt=""/>
      </div>
      <div className="right">
        <p className="name">{singleProduct.name}</p>
        <p className="description">{singleProduct.description}</p>
        <div className="rating">
          <p className="rONE">4.9</p>
           <p className="vertical">|</p>
          <p className="noOR">1200 ratings</p>
        </div>
          <div className="price">
          <p className="amount">{singleProduct.actualPrice}</p>
        <p className="pDes">(MRP incl. of all taxes)</p>
          </div>
          
        <button onClick={() => addToBag(SingleProduct)}>Add To Bag</button>
      </div>
   </div>
  );
};
export default SingleProduct
import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "./SinglrProduct.css";

const bagFromLocalStorage = JSON.parse(localStorage.getItem("bag") || "[]");

export const SingleProduct = () => {
  const [SingleProduct, setSingleProduct] = useState({});
  const [bag, setBag] = useState(bagFromLocalStorage);
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    axios
      .get(``)
      .then(({ data }) => {
        setSingleProduct(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  const addToBag = (SingleProduct) => {
    setBag([...bag, SingleProduct]);
    alert("Added to Bag");
  };

  return (
    <div className="prod_det">
      <div className="prod_det_img">
        <img src={SingleProduct.img} alt="" />
      </div>
      <div className="prod_det_des">
        <h3>{SingleProduct.name}</h3>
        <h4>{SingleProduct.actualPrice}</h4>
        <p>
          MRP <s>{SingleProduct.offerPrice}</s>
        </p>
        

        <button onClick={() => addToBag(SingleProduct)}>Add To Bag</button>
      </div>
      
    </div>
  );
};
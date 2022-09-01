import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getdata } from "../../reducer/AppReducer/action";
import "./SingleProduct.css";

const bagFromLocalStorage = JSON.parse(localStorage.getItem("bag") || "[]");

const SingleProduct = () => {
  // const [singleProduct, setsingleProduct] = useState([]);
  const [bag, setBag] = useState(bagFromLocalStorage);
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.data);
  const singleProduct = data.find((ele) => {
    if (ele.id === Number(id)) {
      return ele;
    }
  });
  // setsingleProduct(single);
  console.log(singleProduct);
  // useEffect(() => {
  //  if(data.length===0)
  //  {
  //   dispatch(getdata())
  //  }
  // }, [data]);
console.log(bag);
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
        <img src={singleProduct.img} alt="" />
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
          <p className="amount">{`₹ ${singleProduct.offerPrice}`}</p>
          <p className="pDes">(MRP incl. of all taxes)</p>
        </div>

        <Button
          bgColor={"black"}
          color={"white"}
          onClick={() => addToBag(singleProduct)}
        >
          Add To Bag
        </Button>
      </div>
    </div>
  );
};
export default SingleProduct;

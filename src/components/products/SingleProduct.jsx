import { Button } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Toster } from "../../chakracomponents/Toster";
import { singledata } from "../../reducer/AppReducer/action";
import "./SingleProduct.css";


let bagFromLocalStorage;
const SingleProduct = () => {

  const { id,type } = useParams();

  useEffect(()=>{
  bagFromLocalStorage = JSON.parse(localStorage.getItem("bag")) || []
  },[id])
  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.app.singleData);

  useEffect(() => {
    dispatch(singledata(Number(id),type))
  }, [id,type,dispatch]);


  const addToBag = () => {
    console.log("hello")
    let a=[...bagFromLocalStorage,singleData]
    localStorage.setItem("bag",JSON.stringify(a));
  
  };

  return (
    <div className="container">
      <div className="left">
        <img src={singleData.img} alt="" />
      </div>
      <div className="right">
        <p className="name">{singleData.name}</p>
        <p className="description">{singleData.description}</p>
        <div className="rating">
          <p className="rONE">4.9</p>
          <p className="vertical">|</p>
          <p className="noOR">1200 ratings</p>
        </div>
        <div className="price">
          <p className="amount">{`₹ ${singleData.offerPrice}`}</p>
          <p className="pDes">(MRP incl. of all taxes)</p>
        </div>

        <Button
          bgColor={"black"}
          color={"white"}
          onClick={addToBag}
        >
          <Toster/>
        </Button>
      </div>
    </div>
  );
};
export default SingleProduct;

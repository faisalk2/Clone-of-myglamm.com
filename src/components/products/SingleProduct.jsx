import {  Button } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Toster } from "../../chakracomponents/Toster";
import { addtobag, datafrombag, singledata } from "../../reducer/AppReducer/action";
import { ADDTOBAG_SUCCESS } from "../../reducer/AppReducer/type";
import "./SingleProduct.css";


// let bagFromLocalStorage;
const SingleProduct = () => {

  const { _id,type } = useParams();

 
  const dispatch = useDispatch();
  let singleData = useSelector((state) => state.app.singleData);

// console.log(singleData)
  useEffect(() => {
   
    dispatch(singledata(_id,type))
   
  }, [_id,type,dispatch]);


  const addToBag = () => {

    dispatch(addtobag(singleData)).then(res=>{
      if(res.type===ADDTOBAG_SUCCESS)
      {
          dispatch(datafrombag())
      }
    })
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

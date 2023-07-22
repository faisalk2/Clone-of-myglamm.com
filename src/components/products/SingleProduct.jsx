import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Toaster } from "../../chakracomponents/Toaster";
import {
  addToBag,
  dataFromBag,
  singleData,
} from "../../reducer/AppReducer/action";
import { ADDTOBAG_SUCCESS } from "../../reducer/AppReducer/type";
import "./SingleProduct.css";
import Loader from "../custom_component/Loader";

const SingleProduct = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();
  let { singleData: data, isLoading,isError } = useSelector((state) => state.app);

  const handleAddToBag = () => {
    dispatch(addToBag(singleData)).then((res) => {
      if (res.type === ADDTOBAG_SUCCESS) {
        dispatch(dataFromBag());
      }
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(singleData(_id));
  }, [_id, dispatch]);

  if (isLoading) return <Loader />;
  if(isError) return <p>Error...</p>

  return (
    <div className="container">
      <div className="left">
        <img src={data.img} alt="" />
      </div>
      <div className="right">
        <p className="name">{data.name}</p>
        <p className="description">{data.description}</p>
        <div className="rating">
          <p className="rONE">4.9</p>
          <p className="vertical">|</p>
          <p className="noOR">1200 ratings</p>
        </div>
        <div className="price">
          <p className="amount">{`₹ ${data.offerPrice}`}</p>
          <p className="pDes">(MRP incl. of all taxes)</p>
        </div>
        <Button bgColor={"black"} color={"white"} onClick={handleAddToBag}>
          <Toaster />
        </Button>
      </div>
    </div>
  );
};
export default SingleProduct;

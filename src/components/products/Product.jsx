import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getdata } from "../../reducer/AppReducer/action";
import "./Product.css";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom'
import { Button } from "@chakra-ui/react";
const ProductItem = () => {
  const [page,setPage]=useState(10)
const {type}=useParams();
  // const [products, setProducts] = useState([]);
  const dispatch=useDispatch()
  const {data}=useSelector((state)=>state.app)
  console.log(data);
  console.log(type);
  const handlePage=()=>{
    setPage((item)=>item+3)
  }
  useEffect(() => {
    dispatch(getdata(type,page));
  }, [dispatch,type,page]);

  return (
    <>
      <div className="PageName" style={{fontWeight:"bold",fontSize:"30px",padding:"20px"}} >Showing {data.length} results of {type}</div>
      <div className="ProductPart">
        <div className="product_wraper">
          {data?.map((e) => {
                return (
                    <Link to={`/product/${type}/${e._id}`}>
          <div className="per_product_card">
            <div className="per_prod_img">
              <img src={e.img} alt="" />
            </div>
            <div className="center">
              <p className="name">{e.name}</p>
              <p className="description">{e.description}</p>
            </div>
            <div className="shade_wrapper">
              <div>
                <img
                  src="https://www.myglamm.com/images/plus-icon.png"
                  alt=""
                />
              </div>
              <p className="count">{e.count}</p>
            </div>
            <div className={e.actualPrice?"price_wrapper" :"center" }>
              <p>₹ {e["offerPrice"]}</p>
              <p className="mrp">
              {e.actualPrice? <s>₹ {e.actualPrice}</s>:""}
              </p>
            </div>
          </div>
          </Link>
                );
            })}
        </div>
      </div>
      <Button onClick={handlePage} padding="30px 40px" bgColor={"white"} border={"1px solid black"} >Show More</Button>
    </>
  );
};
export default ProductItem;

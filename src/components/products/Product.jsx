import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getdata } from "../../reducer/AppReducer/action";
import "./Product.css";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom'
const ProductItem = () => {
const {type}=useParams();
  // const [products, setProducts] = useState([]);
  const dispatch=useDispatch()
  const {data}=useSelector((state)=>state.app)
  console.log(data);
  console.log(type);
  useEffect(() => {
    dispatch(getdata(type));
  }, [dispatch,type]);

  return (
    <>
      <div className="PageName" style={{fontWeight:"bold",fontSize:"30px",padding:"20px"}} >Showing {data.length} results of {type}</div>
      <div className="ProductPart">
        <div className="product_wraper">
          {data.map((e) => {
                return (
                    <Link to={`/product/${type}/${e.id}`}>
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
            <div className="price_wrapper">
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
    </>
  );
};
export default ProductItem;

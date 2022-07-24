import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="PageName">{type}</div>
      <div className="ProductPart">
        <div className="product_wraper">
          {products.map((e) => {
                return (
                    <Link to={`${e.id}`}>
          <div className="per_product_card">
            <div className="per_prod_img">
              <img src={e.img} alt="" />
            </div>
            <div>
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
              <p>{e.actualPrice}</p>
              <p className="mrp">
                <s>{e.offerPrice}</s>
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

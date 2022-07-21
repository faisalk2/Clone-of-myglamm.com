import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ProductItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      getData();
    }, []);
  
   
    return (
        <>
         <div className="product_wraper">
            {products.map((e) => {
                return (
                    <Link to={`${e._id}`}>
                        <div className="per_product_card">
                            <div className="per_prod_img">
                                <img src={e.prod_img} alt="" />
                            </div>
                            <div>
                                <h2>{e.product-name}</h2>
                                <h3>{e.short-des}</h3>
                            </div>
                            <div className="shade_wrapper">
                                <div>
                                    <img src="{e.plus-icon}" alt="" />
                                </div>
                                <h2>{e.shade-count}</h2>
                            </div>
                            <div>
                                <p>
                                    MRP <s>{e.offer_price}</s>
                                </p>
                            </div>
                            <h5>{e.actual-price}</h5>
                        </div>
                    </Link>
                );
            })}
          </div>
        </>
    );
}
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
                    <Link to={`${e.id}`}>
                        <div className="per_product_card">
                            <div className="per_prod_img">
                                <img src={e.img} alt="" />
                            </div>
                            <div>
                                <h2>{e.name}</h2>
                                <h3>{e.description}</h3>
                            </div>
                            <div className="shade_wrapper">
                                <div>
                                    <img src="{e.plus}" alt="" />
                                </div>
                                <h2>{e.count}</h2>
                            </div>
                            <div>
                                <p>
                                    MRP <s>{e.offerPrice}</s>
                                </p>
                            </div>
                            <h5>{e.actualPrice}</h5>
                        </div>
                    </Link>
                );
            })}
          </div>
        </>
    );
}
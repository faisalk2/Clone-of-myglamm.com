import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../reducer/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Loader from "../custom_component/Loader";
import Style from './product.module.css'
const ProductItem = () => {
  const [page, setPage] = useState(10);
  const { type } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.app);

  console.log(data)

  const handlePage = () => {
    setPage((item) => item + 3);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getData(type.toLowerCase().replace(' ',''), page));
  }, [dispatch, type, page]);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error...</p>;

  return (
    <>
      <div
        className={Style.PageName}
        style={{ fontWeight: "bold", fontSize: "30px", padding: "20px" }}
      >
        Showing {data.length} results of {type}
      </div>
      <div className={Style.ProductPart}>
        <div className={Style.productWrapper}>
          {data?.map((e) => {
            return (
              <Link to={`/product/${type}/${e._id}`}>
                <div className={Style.productCard}>
                  <div className={Style.prodImg}>
                    <img src={e.img} alt="" />
                  </div>
                  <div className={Style.proDetails}>
                    <p className={Style.proName}>{e.name}</p>
                    <p className={Style.proDescription}>{e.description}</p>
                  </div>
                  <div className={Style.shadeWrapper}>
                    <div>
                      <img
                        src="https://www.myglamm.com/images/plus-icon.png"
                        alt=""
                      />
                    </div>
                    <p className={Style.count}>{e.count}</p>
                  </div>
                  <div className={e.actualPrice ? Style.priceWrapper : Style.center}>
                    <p>₹ {e["offerPrice"]}</p>
                    <p className={Style.mrp}>
                      {e.actualPrice ? <s>₹ {e.actualPrice}</s> : ""}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Button
        onClick={handlePage}
        padding="30px 40px"
        bgColor={"white"}
        border={"1px solid black"}
      >
        Show More
      </Button>
    </>
  );
};
export default ProductItem;

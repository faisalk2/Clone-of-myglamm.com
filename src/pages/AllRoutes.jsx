import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "../components/Footer";
import { CheckOut } from "./CheckOut";
import { MyBag } from "./MyBag";
import { FooterC } from "../components/FooterC";
import { Address } from "./Address";
import Payment from "./Payment";
import { Box } from "@chakra-ui/react";
import NotFound from "./NotFound";
import ProductItem from "../components/products/Product";
import SingleProduct from "../components/products/SingleProduct";
import Totoside from "../components/Totoside";
import ProceedNav from "../components/ProceedNav";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/product/:type"
          element={
            <>
              <Navbar />
              <ProductItem />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/product/:type/:_id"
          element={
            <>
              <Navbar />
              <SingleProduct />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/proceed" element={<ProceedNav />}>
          <Route path="/proceed/my-bag"  element={<MyBag />} />
          <Route path="/proceed/address" element={<Address />} />
          <Route path="/proceed/checkout" element={<CheckOut />} />
          <Route path="/proceed/payment" element={<Payment />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFound />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
      <Totoside />
    </Box>
  );
};

export default AllRoutes;

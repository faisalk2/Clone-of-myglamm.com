import React from "react";
import { Spacer, Flex, Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { MenuBar } from "./MenuBar";
import { SearchBar } from "./SearchBar";
import { FaShoppingBag } from "react-icons/fa";
import { OfferBar } from "./OfferBar";
import "../App.css";
import SignupChakra from "../signup/SignupChakra";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Profile from "../signup/Profile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { dataFromBag } from "../reducer/AppReducer/action";

const Navbar = () => {
  let bag = useSelector((state) => state.app.bag);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(dataFromBag());
  }, [dispatch]);

  return (
    <Box className="navbar-sticky" width="100%">
      <OfferBar />
      <Flex width="70%" direction="row" height="60px" margin="auto" pt="12px">
        <Box>
          {" "}
          <Logo />{" "}
        </Box>
        <Box className="searchbar">
          {" "}
          <SearchBar />{" "}
        </Box>
        <Spacer />
        <Flex justifyContent={"space-between"} width="100px">
          <Box
            onClick={() => navigate("/proceed/my-bag")}
            cursor={"pointer"}
            display="flex"
          >
            {" "}
            <FaShoppingBag
              style={{ color: "black", border: "1px", fontSize: "25px" }}
            />
            <span
              style={{
                position: "relative",
                right: "10px",
                backgroundColor: "#fee8e8",
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                textAlign: "center",
              }}
            >
              {bag.length}
            </span>{" "}
          </Box>
          <Box cursor={"pointer"}>
            {" "}
            {isAuth ? <Profile /> : <SignupChakra />}{" "}
          </Box>
        </Flex>
      </Flex>
      <MenuBar />
    </Box>
  );
};

export default Navbar;

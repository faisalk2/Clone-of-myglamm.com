import React, { useState } from "react";
import { Input, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    if (!e.target.value.match(/^[0-9]$/)) {
      setSearch(e.target.value);
    }
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      navigate(`/product/${search}`);
    }
  };

  return (
    <Box
      className="media"
      display="flex"
      border={"1px solid #e8e8e9"}
      borderRadius="5px"
    >
      <Box width={"60px"} bgColor="#f5f5f6">
        <SearchIcon
          backgroundColor="rgb(245,245,246)"
          p="1px"
          h="40px"
          width={"25px"}
          borderRadius="6px 0px 0px 6px"
          borderRight="none"
          color={"#c3c5cc"}
        />
      </Box>
      <Input
        value={search}
        onChange={onChange}
        onKeyUp={(e) => handleSearch(e)}
        variant="unstyled"
        backgroundColor="rgb(245,245,246)"
        borderLeft="none"
        borderRadius="0px 6px 6px 0px"
        fontFamily={"Roboto"}
        fontWeight={"400"}
        color="#333333"
        width={{
          sm: "200px",
          md: "250",
          lg: "300px",
          xl: "350px",
          "2xl": "400px",
        }}
        placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc"
      />
    </Box>
  );
};

import React, { useEffect, useState } from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightAddon,
  Button,
  Img,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Heading,
  Flex
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  HamburgerIcon,
  MoonIcon,
  Search2Icon,
  SunIcon,
} from "@chakra-ui/icons";
import { getSearchResult } from "../Redux/action";
import Dashboard from "../Pages/Dashboard";
import useDebouncedApiCall from './useDebounced';

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  //const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState(0);
  const { input, handleInputChange } = useDebouncedApiCall(getSearchResult, 2000);
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((store) => {
    return store;
  });
  console.log(data)


  return (
    <>
      <Box maxW="50%" textAlign={"center"} m="auto" marginTop="0px">
        <Heading color={"teal.500" } padding={"5"} >Search World by Currency Code</Heading>
        <InputGroup w={"100%"} borderRadius="md" size="lg">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
          />
          <Input
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            type="text"
            placeholder={`Search world by currency code like INR,USD,EUR`}
            border="1px solid #949494"
          />

          <InputRightAddon p={0} border="none">
            <Button
              size="lg"
              borderLeftRadius={1}
              borderRightRadius={3.3}
              border="1px solid #949494"
            >
              Search
            </Button>
            {/* <Search searchInput = {search} /> */}
          </InputRightAddon>
        </InputGroup>
        {/* {isLoading ? (
          <Box className="loader">
            <Flex marginLeft={"30%"} marginRight={"20%"}>

            <Img 
            
              src="https://media2.giphy.com/media/kUTME7ABmhYg5J3psM/200.webp?cid=ecf05e476wp7d14p8n83v9hhb5piccfgrn5e8tn5dwv4us9x&ep=v1_gifs_search&rid=200.webp&ct=g"
              alt="find world by currency"
            />
            </Flex>
          </Box>
        ) : (
          ""
        )} */}
      </Box>
    </>
  );
};

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
  const { input, handleInputChange } = useDebouncedApiCall(getSearchResult, 1000);
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((store) => {
    return store;
  });
  console.log("Serach",data,isLoading,isError);

  return (
    <>
      <Box maxW="50%" textAlign={"center"} m="auto" marginTop="0px" mb={"2rem"}>
        <Heading color={"teal.500" } padding={"5"} >Search World by Currency Code</Heading>
        <InputGroup w={"100%"} borderRadius="md" size="lg">
          <InputLeftElement
            pointerEvents="none"
            color={"black"}
            children={<Search2Icon color="blue.400" />}
          />
          <Input
          color={"blue"}
          _placeholder={{ opacity: 1, color: 'gray.500' }}
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            type="text"
            placeholder={`Search world by currency code like INR,USD,EUR`}
            border="1px solid #949494"
            
          />

        
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

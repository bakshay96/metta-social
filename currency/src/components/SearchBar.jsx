import React, { useEffect, useState } from "react";
import {
  Box,
  
  InputGroup,
  InputLeftElement,
  Input,
  InputRightAddon,
  Button,
  Img,
  
} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { HamburgerIcon, MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import { getSearchResult } from "../Redux/action";
import Home from "../Pages/Home";


export const SearchBar = () => {
  const [search,setSearch]=useState("");
    const [input, setInput] = useState("");
    const [placeholder,setPlaceholder]=useState(0)
    const dispatch=useDispatch();
    const data = useSelector((store) => {
      return store.data;
    });

    

    
   
    const debounce =(fun,delay)=>
    {
      if(id)
      {
        clearTimeout(id);
      }
      id=setTimeout(()=>{
        fun();
      },delay)
    }

    useEffect(() => {
      
      if (!input == "") {
        const debounce = setTimeout(() => {
          dispatch(getSearchResult(input));
          console.log(input);
        },1000);
        return () => clearTimeout(debounce);

      }

    }, [input]);
  
  return (
    <>
  
    <Box maxW="100%"  textAlign={"center"} m="auto" marginTop="10px">
        <InputGroup w={"100%"} borderRadius="md"  size="lg">
          
            <InputLeftElement
           
              pointerEvents="none"
              children={<Search2Icon color="gray.600" />}
            />
            <Input  value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder= {`Search world by currency`} border="1px solid #949494"  />

            <InputRightAddon
              p={0}
              border="none"
            >
              <Button size="lg" borderLeftRadius={1} borderRightRadius={3.3} border="1px solid #949494">
                Search
              </Button>
              {/* <Search searchInput = {search} /> */}
            </InputRightAddon>
          
          </InputGroup>
         {
          data.length==0?<Box>
          
          <Img
           src="https://images.pexels.com/photos/7412098/pexels-photo-7412098.jpeg?auto=compress&cs=tinysrgb&w=600"
           alt="Green double couch with wooden legs"
          
         />
          </Box>:""
         } 
         
    </Box>
    {
      input && input?<Home />:""
    }
    
    </>
  )
}





  

  
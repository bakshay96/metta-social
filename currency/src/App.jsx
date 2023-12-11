import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

import Dashboard from "./Pages/Dashboard";
import { CountryCard } from "./components/CountryCard";
import { useSelector } from "react-redux";
import { Box, Flex, Heading ,Text} from "@chakra-ui/react";


function App() {
  const [count, setCount] = useState(0);
const { data, isLoading, isError } = useSelector((store) => {
  return store;
});
  return (
    <div className="main">
    
    <SearchBar />
    {
    data.length==0?<img className="main-img" src='https://cdn.pixabay.com/photo/2015/09/30/08/25/money-965060_640.jpg' alt='allflags'/>
    :isLoading?<img className="loader" src="https://media2.giphy.com/media/kUTME7ABmhYg5J3psM/200.webp?cid=ecf05e476wp7d14p8n83v9hhb5piccfgrn5e8tn5dwv4us9x&ep=v1_gifs_search&rid=200.webp&ct=g" />
    :isError && data.length==0?<div className="err"><Heading textAlign={"center"} color={"blue.300"} mt={"50px"} >Currently no data available....</Heading> </div>
    :<Dashboard />
    }
    </div>
  );
}

export default App;

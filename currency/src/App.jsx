import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

import Dashboard from "./Pages/Dashboard";
import { CountryCard } from "./components/CountryCard";
import { useSelector } from "react-redux";
import { Box, Flex, FormLabel, Heading, Spinner, Stack, Text } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading, isError, initialState } = useSelector((store) => {
    return store;
  });
  console.log("app",data,isLoading,isError,initialState);
  return (
    <div className="main">
      <SearchBar />
      {isLoading && !isError ? (
        <Stack direction="row" spacing={2} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            mb={"2rem"}
          />
          <FormLabel color={"blueviolet"}>Loading...</FormLabel>
        </Stack>
      ) : initialState && !isError ? (
        <div className="err">
          <Heading textAlign={"center"} color={"blue.300"} mt={"10px"}>
            Currently no result found....
          </Heading>{" "}
        </div>
      ) : isError ? (
        <div className="err">
          <Heading textAlign={"center"} color={"blue.300"} mt={"10px"}>
            Error..! 404 Not Found...
          </Heading>{" "}
        </div>
      ) : (
        ""
      )}
      {initialState && data.length == 0  ? (
        <img
          className="main-img"
          src="https://cdn.pixabay.com/photo/2015/09/30/08/25/money-965060_640.jpg"
          alt="allflags"
        />
      ) : !isLoading && !initialState && ! isError?(
        <Dashboard />
      ):<img
      className="main-img"
      src="https://cdn.pixabay.com/photo/2015/09/30/08/25/money-965060_640.jpg"
      alt="allflags"
    />}
    </div>
  );
}

export default App;

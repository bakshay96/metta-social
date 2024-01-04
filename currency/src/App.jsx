import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

import Dashboard from "./Pages/Dashboard";
import { CountryCard } from "./components/CountryCard";
import { useSelector } from "react-redux";
import { Box, Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading, isError, initialState } = useSelector((store) => {
    return store;
  });
  return (
    <div className="main">
      <SearchBar />
      {isLoading ? (
        <Stack direction="row" spacing={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            mb={"2rem"}
          />
        </Stack>
      ) : initialState ? (
        <div className="err">
          <Heading textAlign={"center"} color={"blue.300"} mt={"10px"}>
            Currently no data available....
          </Heading>{" "}
        </div>
      ) : isError ? (
        <div className="err">
          <Heading textAlign={"center"} color={"blue.300"} mt={"10px"}>
            Server Error....
          </Heading>{" "}
        </div>
      ) : (
        ""
      )}
      {initialState && data.length == 0 ? (
        <img
          className="main-img"
          src="https://cdn.pixabay.com/photo/2015/09/30/08/25/money-965060_640.jpg"
          alt="allflags"
        />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;

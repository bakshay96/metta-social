import React from "react";
import { useSelector } from "react-redux";
import { CountryCard } from "../components/CountryCard";
import { Box, grid } from "@chakra-ui/react";
import "./Home.css";
const Home = () => {
  const data = useSelector((store) => store.data);
  console.log("home ", data.data);
  return (
    <>
       
      <Box className="box-container">
        {data?.map((e, i) => {
          return (
            <CountryCard
              id={i}
              name={e.name}
              capital={e.capital}
              region={e.region}
              currencies={e.currencies}
              flag={e.flags.png}
            />
          );
        })}
      </Box>
      
    </>
  );
};

export default Home;

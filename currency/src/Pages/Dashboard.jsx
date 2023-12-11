import React from "react";
import { useSelector } from "react-redux";
import { CountryCard } from "../components/CountryCard";
import { Box, grid } from "@chakra-ui/react";
import "./Dashboard.css";
const Dashboard = () => {
  const store = useSelector((store)=>{
    return store;
  });
  console.log(store.data,store.isLoading,store.isError,store,"dashboard")
  
  return (
    <>
       
      <Box className="box-container">
        {store.data.length>1?store.data.map((e, i) => {
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
        }):""}
      </Box>
      
    </>
  );
};

export default Dashboard;

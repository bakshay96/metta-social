import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const CountryCard = ({
  flag,
  name,
  capital,
  region,
  currencies,
  id,
}) => {
  
  return (
    <Card maxW="sm" className="card" boxShadow='dark-lg' p='3' rounded='md' bg='white' mt={"1rem"} key={id} >
      <CardBody display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Image
        maxH={"200px"}
          src={flag}
          alt="Green double couch with wooden legs"
          borderRadius="md"
        />
        <Stack mt="6" spacing="3" textAlign={"center"}>
          <Heading size="md">{name.common}</Heading>
          <Text color="blue.600" fontSize={"xl"}>
            <span color="blue.200">Captial City :</span> <b>{capital} </b>
          </Text>
          <Text color="blue.600"  fontSize="xl">
          <span color="blue.200">Region :</span> <b>{region} </b>
          </Text>
          {Object.entries(currencies).map(([currencyCode, currencyInfo]) => {
            return (
              <Flex justifyContent={"space-around"} bgColor={"blue.200"} >
                <Text color="blue.600" fontWeight={"500"}><span color="green">Symbol :</span>{currencyInfo.symbol}</Text>
                <Text color="red.600"><span color="green"></span>{currencyInfo.name}</Text>
              </Flex>
            );
          })}
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

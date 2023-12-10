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
  console.log(currencies);
  return (
    <Card maxW="sm" className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white' mt={"1rem"} >
      <CardBody>
        <Image
          src={flag}
          alt="Green double couch with wooden legs"
          borderRadius="md"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name.common}</Heading>
          <Text color="blue.600">
            <span color="blue.200">Captial City :</span> <b>{capital} </b>
          </Text>
          <Text color="blue.600" bg-bgColor="red" fontSize="2xl">
          <span color="blue.200">Region :</span> {region}
          </Text>
          {Object.entries(currencies).map(([currencyCode, currencyInfo]) => {
            return (
              <Flex justifyContent={"space-around"}>
                <Text color="blue.600">{currencyInfo.symbol}</Text>
                <Text color="red.600">{currencyInfo.name}</Text>
              </Flex>
            );
          })}
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

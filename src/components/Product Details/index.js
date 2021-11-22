import React from "react";
import { Box, Image, Badge, Grid, Button } from "@chakra-ui/react";
import Card from "../Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [data, setData] = useState([]);

  const { product_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://6196420eaf46280017e7df35.mockapi.io/api/clothes/${product_id}`
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      Product Details
      <Box>
        {product_id}
        <Image src={data.image}></Image>
      </Box>
      <Box>
        <Button colorScheme="yellow" color="black" size="sm" ml={5}>
          Add to Cart
        </Button>
        <Button colorScheme="pink" color="black" size="sm" ml={5}>
          Add to Favorites
        </Button>
        <Button colorScheme="pink" color="black" size="sm" ml={5}>
          Back to Homepage
        </Button>
      </Box>
    </div>
  );
}

export default ProductDetails;

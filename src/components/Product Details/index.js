import React from "react";
import { Box, Image, Badge, Grid, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const [data, setData] = useState([]);

  const { product_id } = useParams();

  const { addToCart, items } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://6196420eaf46280017e7df35.mockapi.io/api/clothes/${product_id}`
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  const findCardItem = items.find((item) => item.id === product_id);

  return (
    <div>
      Product Details
      <Box>
        {product_id}
        <Image src={data.image}></Image>
      </Box>
      <Box>
        <Button
          onClick={() => addToCart(data, findCardItem)}
          colorScheme={findCardItem ? `red` : `yellow`}
          color="black"
          size="sm"
          ml={5}
        >
          {findCardItem ? `Remove From Cart` : `Add To Cart`}
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

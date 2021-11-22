import React from "react";
import { Box, Image, Badge, Grid, Button } from "@chakra-ui/react";

function ProductDetails() {
  return (
    <div>
      Product Details
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

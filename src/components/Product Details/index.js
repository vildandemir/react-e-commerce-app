import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Badge, Grid, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

function ProductDetails() {
  const [data, setData] = useState([]);

  const { product_id } = useParams();

  const { addToCart, items } = useCart();

  const { addToFavorites, products } = useFavorites();

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

  const findFavoriteItem = products.find(
    (product) => product.id === product_id
  );

  return (
    <div>
      Product Details
      <Box>
        {product_id}
        <Image align={"center"} boxSize="250px" src={data.image}></Image>
      </Box>
      <Box>
        <Button
          onClick={() => {
            addToCart(data, findCardItem);
          }}
          colorScheme={findCardItem ? `red` : `yellow`}
          color="black"
          size="sm"
          ml={5}
        >
          {findCardItem ? `Remove From Cart` : `Add To Cart`}
        </Button>

        <Button
          onClick={() => addToFavorites(data, findFavoriteItem)}
          colorScheme={findFavoriteItem ? `red` : `pink`}
          color="black"
          size="sm"
          ml={5}
        >
          {findFavoriteItem ? `Remove From Favorites` : `Add To Favorites`}
        </Button>
        <Button colorScheme="pink" color="black" size="sm" ml={5}>
          <Link to="/"> Back to Homepage </Link>
        </Button>
      </Box>
    </div>
  );
}

export default ProductDetails;

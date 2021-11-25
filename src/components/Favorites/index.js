import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { Alert, AlertIcon, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Favorites() {
  const { products, removeItemFromFavorites } = useFavorites();
  console.log(products);
  return (
    <div>
      {products.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any product in your favorite list.
        </Alert>
      )}
      {products.length > 0 && (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <Image
                    htmlWidth="200"
                    src={product.image}
                    alt="cart product"
                  />
                  {product.name} - {product.price}
                </Link>
                <Button
                  onClick={() => removeItemFromFavorites(product.id)}
                  colorScheme="pink"
                  color="black"
                  size="sm"
                  ml={5}
                >
                  Remove From Favorite List
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Favorites;

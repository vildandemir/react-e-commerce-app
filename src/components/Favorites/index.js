import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import Card from "../Card";
import { Alert, AlertIcon } from "@chakra-ui/react";

function Favorites() {
  const { products } = useFavorites();
  console.log(products);
  return (
    <div>
      {products.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any product in your favorite list.
        </Alert>
      )}
      {products.length > 0 &&
        products.map((item, key) => <Card key={key} item={item} />)}
    </div>
  );
}

export default Favorites;

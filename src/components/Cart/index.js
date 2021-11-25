import React from "react";
import { useCart } from "../../context/CartContext";
import Card from "../Card/index";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Cart() {
  const { items } = useCart();
  console.log(items);
  return (
    <div>
      {items.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any product in your cart.
        </Alert>
      )}
      {items.length > 0 &&
        items.map((item, key) => <Card key={key} item={item} />)}
    </div>
  );
}

export default Cart;

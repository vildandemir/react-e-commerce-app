import React from "react";
import { useCart } from "../../context/CartContext";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Image, Button, Text } from "@chakra-ui/react";

function Cart() {
  const { items, removeItemFromCart } = useCart();
  console.log(items);

  const totalPrice = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <div>
      {items.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any product in your cart.
        </Alert>
      )}
      {items.length > 0 && (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <Image htmlWidth="200" src={item.image} alt="cart item" />
                  {item.name} - {item.price}
                </Link>
                <Button
                  onClick={() => removeItemFromCart(item.id)}
                  colorScheme="pink"
                  color="black"
                  size="sm"
                  ml={5}
                >
                  Remove From Cart
                </Button>
              </li>
            ))}
          </ul>
          <Text>Total : {totalPrice} $</Text>
        </>
      )}
    </div>
  );
}

export default Cart;

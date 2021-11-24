import React from "react";
import { useCart } from "../../context/CartContext";
import Card from "../Card/index";

function Cart() {
  const { items } = useCart();
  console.log(items);
  return (
    <div>
      {items.map((item, key) => (
        <Card key={key} item={item} />
      ))}
    </div>
  );
}

export default Cart;

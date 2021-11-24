import { useState, createContext, useEffect, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (data, findCardItem) => {
    if (!findCardItem) {
      return setItems([data, ...items]);
    }
    const filtered = items.filter((item) => item.id !== findCardItem.id);
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

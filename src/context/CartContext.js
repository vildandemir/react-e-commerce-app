import { useState, createContext, useContext } from "react";

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

  const removeItemFromCart = (item_id) => {
    const filtered = items.filter((item) => item.id !== item_id);
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    addToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

import { useState, createContext, useEffect, useContext } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addToFavorites = (data, findFavoriteItem) => {
    if (!findFavoriteItem) {
      return setProducts([data, ...products]);
    }
    const filtered = products.filter((item) => item.id !== findFavoriteItem.id);
    setProducts(filtered);
  };

  const removeItemFromFavorites = (item_id) => {
    const filtered = products.filter((product) => product.id !== item_id);
    setProducts(filtered);
  };

  const values = {
    products,
    setProducts,
    addToFavorites,
    removeItemFromFavorites,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => useContext(FavoritesContext);

export { FavoritesProvider, useFavorites };

import { useState, createContext, useContext } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addToFavorites = (data, findFavoriteItem) => {
    if (!findFavoriteItem) {
      return setProducts([data, ...products]);
    }
    //don't add the same product twice, if there are different products, list them
    const filtered = products.filter((item) => item.id !== findFavoriteItem.id);
    setProducts(filtered);
  };

  const removeItemFromFavorites = (item_id) => {
    //list products other than you clicked
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

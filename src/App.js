import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Products from "./components/Products";
import Cart from "./components/Cart/index";
import Favorites from "./components/Favorites";
import ProductDetails from "./components/Product Details";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/product/:product_id" component={ProductDetails} />
              <Route path="/cart" component={Cart} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;

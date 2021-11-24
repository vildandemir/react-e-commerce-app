import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Products from "./components/Products";
import Cart from "./components/Cart/index";
import Favorites from "./components/Favorites";
import ProductDetails from "./components/Product Details";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;

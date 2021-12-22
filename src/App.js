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
import Jackets from "./components/Navbar/Categories/Jackets";
import Pants from "./components/Navbar/Categories/Pants";
import DressShirts from "./components/Navbar/Categories/DressShirts";
import Dresses from "./components/Navbar/Categories/Dresses";
import Sunglasses from "./components/Navbar/Categories/Sunglasses";
import Footer from "./components/Footer";
import Auth from "./components/Auth";

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
              <Route path="/jackets" component={Jackets} />
              <Route path="/pants" component={Pants} />
              <Route path="/dresses" component={Dresses} />
              <Route path="/dressshirts" component={DressShirts} />
              <Route path="/sunglasses" component={Sunglasses} />
              <Route path="/auth" component={Auth} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;

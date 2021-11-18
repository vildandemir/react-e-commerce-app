import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Products from "./components/Products";
import Cart from "./components/Cart/index";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Products />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <div>Home</div>;
}
export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Banner from "./components/Layout/Banner";
import Footer from "./components/Layout/Footer";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/Product/SingleProduct";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route path="/" exact component={Banner} />
        <Route path="/products/:id" exact component={SingleProduct} />
        <Route path="/" component={Products} />
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default App;

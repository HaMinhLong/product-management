import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/Product/SingleProduct";
import AddProduct from "./components/Form/AddProduct";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route path="/products/:id" exact component={SingleProduct} />
        <Route path="/" exact component={Products} />
        <Route path="/add-product" exact component={AddProduct} />
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../Layout/Navbar";
import Products from "../Products/Products";
import SingleProduct from "../Products/Product/SingleProduct";
import AddProduct from "../Form/AddProduct";
import NoMatch from "../404Page/404Page";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/add-product-:id" component={AddProduct} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Home;

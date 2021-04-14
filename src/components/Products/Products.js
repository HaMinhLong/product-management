import React, { Component } from "react";

import Product from "./Product/Product";
import data from "../../products.json";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
    };
  }

  render() {
    return (
      <section className="products-container">
        <Product />
        <Product />
        <Product />
      </section>
    );
  }
}

export default Products;

import React, { Component } from "react";

import Product from "./Product/Product";
import data from "../../products.json";

import Categories from "./Categories";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
    };
  }

  render() {
    const { products } = this.state;
    return (
      <section className="main-container">
        <Categories />
        <section className="products-container">
          <div className="filter">
            <div className="filter-result">
              <p>
                Hiển thị: <span>10/20</span> sản phẩm
              </p>
            </div>
            <div className="filter-products">
              <div className="filter-price">
                Price:
                <select value="lowest">
                  <option>Latest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
                </select>
              </div>
              <div className="filter-size">
                Size:
                <select value="ALL">
                  <option value="">ALL</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="products">
            <Product />
            <Product />
          </div>
        </section>
      </section>
    );
  }
}

export default Products;

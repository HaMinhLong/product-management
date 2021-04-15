import React, { Component } from "react";

import Product from "./Product/Product";
import data from "../../products.json";

import Categories from "./Categories";
import Banner from "../Layout/Banner";
import { connect } from "react-redux";
import * as actions from "../../redux/Product/productsTypes";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
    };
  }

  filterProducts = (category) => {
    this.setState({
      products: data.products.filter(
        (product) => product.category === category
      ),
    });
  };

  componentDidMount = () => {
    console.log("componentDidMount");
    console.log(this.props.products);
  };

  render() {
    const { products } = this.state;
    return (
      <section>
        <Banner title="Danh sách sản phẩm" />
        <section className="main-container">
          <Categories filterProducts={this.filterProducts} />
          <section className="products-container">
            <div className="filter">
              <div className="filter-result">
                <p>
                  Hiển thị:{" "}
                  <span>
                    {products.length}/{data.products.length}
                  </span>{" "}
                  sản phẩm
                </p>
              </div>
              <div className="filter-products">
                <div className="filter-price">
                  Price:
                  <select defaultValue="lowest">
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                  </select>
                </div>
                <div className="filter-size">
                  Size:
                  <select defaultValue="ALL">
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
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch({
        type: actions.FETCH_PRODUCTS,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

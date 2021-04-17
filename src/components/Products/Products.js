import React, { Component } from "react";

import Product from "./Product/Product";
import Filter from "./Filter";
import Categories from "./Categories";
import Banner from "../Layout/Banner";
import { connect } from "react-redux";
// import * as actions from "../../redux/Product/productsTypes";
import { fetchProducts } from "../../redux/Product/productsActions";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  filterProducts = (category) => {
    this.setState({
      products: this.props.items.filter(
        (product) => product.category === category
      ),
    });
  };

  loadProducts = () => {
    setTimeout(() => {
      this.setState({
        products: this.props.items,
      });
    }, 1);
  };

  componentDidMount = () => {
    this.props.fetchProducts();
    this.loadProducts();
  };

  render() {
    const { products } = this.state;

    return (
      <section>
        <Banner title={["Danh sách sản phẩm"]} />
        <section className="main-container">
          <Categories filterProducts={this.filterProducts} />
          <section className="products-container">
            <Filter products={products} />
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
    products: state.products.filteredItems,
    items: state.products.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

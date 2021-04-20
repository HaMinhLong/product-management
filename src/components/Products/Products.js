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
      filterProducts: [],
    };
  }

  filterProducts = (category) => {
    this.setState({
      products: this.props.items.filter(
        (product) => product.category === category
      ),
      filterProducts: this.props.items.filter(
        (product) => product.category === category
      ),
    });
  };

  filterProductsBySizes = (products, size) => {
    const filterProducts =
      size === ""
        ? products
        : products.filter(
            (product) => product.availableSizes.indexOf(size) >= 0
          );
    this.setState({
      products: filterProducts,
    });
  };

  sortProductsByPrice = (products, sort) => {
    sort === "latest"
      ? products.sort((a, b) => (a.id > b.id ? 1 : -1))
      : products.sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price > b.price
            ? -1
            : 1
        );
    this.setState({
      products: products,
    });
  };

  loadProducts = () => {
    setTimeout(() => {
      this.setState({
        products: this.props.items,
        filterProducts: this.props.items,
      });
    }, 1);
  };

  componentDidMount = () => {
    this.props.fetchProducts();
    this.loadProducts();
  };

  componentWillReceiveProps(nextProps) {
    const { items } = this.props;
    console.log(items);
    console.log(nextProps.items);
    if (nextProps.items !== items) {
      this.setState({
        products: nextProps.items,
      });
    }
  }

  render() {
    const { products } = this.state;

    return (
      <section>
        <Banner title={["Danh sách sản phẩm"]} />
        <section className="main-container">
          <Categories filterProducts={this.filterProducts} />
          <section className="products-container">
            <Filter
              products={this.state.filterProducts}
              filterProductsBySizes={this.filterProductsBySizes}
              sortProductsByPrice={this.sortProductsByPrice}
            />
            <div className="products">
              {products &&
                products.length > 0 &&
                products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    filterProduct={this.filterProduct}
                  />
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
    items: state.products,
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

import React, { Component } from "react";

import Product from "./Product/Product";
import Filter from "./Filter";
import Categories from "./Categories";
import Banner from "../Layout/Banner";
import { connect } from "react-redux";
// import * as actions from "../../redux/Product/productsTypes";

import filter from "../../images/filter.svg";

import {
  fetchProducts,
  deleteProduct,
} from "../../redux/Product/productsActions";

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

  componentDidMount = () => {
    this.props.fetchProducts();
    setTimeout(() => {
      this.setState({
        products: this.props.items,
        filterProducts: this.props.items,
      });
    }, 1);
  };

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   const { items } = this.props;
  //   console.log("nextProps: ", nextProps.items);
  //   console.log("Items: ", items);
  //   if (nextProps.items !== items) {
  //     this.setState({
  //       ...this.state,
  //       products: nextProps.items,
  //     });
  //   }
  // }

  deleteProduct = (id) => {
    this.props.deleteProduct(id);
    setTimeout(() => {
      this.setState({
        products: this.state.products.filter((product) => product.id !== id),
      });
    }, 1);
  };

  toggleFilter = () => {
    const categoriesIcon = document.querySelector(".categories-icon");
    const categories = document.querySelector(".categories-container");
    categoriesIcon.addEventListener("click", () => {
      categories.classList.add("active");
    });
  };

  render() {
    const { products } = this.state;

    return (
      <section>
        <Banner title={["Danh sách sản phẩm"]} />
        <section className="main-container">
          <div className="categories-icon" onClick={() => this.toggleFilter()}>
            <img src={filter} alt="filter icon" />
            <p>Bộ lọc</p>
          </div>
          <Categories
            products={this.state.filterProducts}
            filterProducts={this.filterProducts}
            sortProductsByPrice={this.sortProductsByPrice}
            filterProductsBySizes={this.filterProductsBySizes}
          />
          <section className="products-container">
            <p>
              Hiển thị <span>{products.length}</span> sản phẩm
            </p>
            <Filter
              products={this.state.filterProducts}
              listProducts={this.state.products}
              productsLength={this.state.products.length}
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
                    deleteProduct={this.deleteProduct}
                  />
                ))}
            </div>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    items: products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    deleteProduct: (id) => {
      dispatch(deleteProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

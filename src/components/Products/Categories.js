import React, { Component } from "react";

import data from "../../categories.json";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: data.categories,
    };
  }

  closeFilter = () => {
    const close = document.querySelector("#close-filter");
    const categoriesList = document.querySelectorAll(".category");
    const pricesList = document.querySelectorAll(".price-filter");
    const sizesList = document.querySelectorAll(".size-filter");

    const categories = document.querySelector(".categories-container");

    close.addEventListener("click", () => {
      categories.classList.remove("active");
    });
    categoriesList.forEach((category) => {
      category.addEventListener("click", () => {
        categories.classList.remove("active");
      });
    });
    pricesList.forEach((price) => {
      price.addEventListener("click", () => {
        categories.classList.remove("active");
      });
    });
    sizesList.forEach((size) => {
      size.addEventListener("click", () => {
        categories.classList.remove("active");
      });
    });
  };

  filterByCategory = (category) => {
    this.props.filterProducts(category);
    this.closeFilter();
  };

  sortByPrice = (products, sort) => {
    this.props.sortProductsByPrice(products, sort);
    this.closeFilter();
  };

  filterBySize = (products, size) => {
    this.props.filterProductsBySizes(products, size);
    this.closeFilter();
  };

  render() {
    const { categories } = this.state;
    const { products } = this.props;
    return (
      <section className="categories-container">
        <div id="close-filter" onClick={() => this.closeFilter()}></div>
        <div className="categories">
          <div className="title">
            <p>Chọn sản phẩm</p>
            <div className="icon"></div>
          </div>
          <div className="categories-box">
            <ul>
              {categories.map((category) => (
                <li
                  className="category"
                  onClick={() => this.filterByCategory(category)}
                  key={category}
                >
                  <p>{category}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="price">
          <div className="title">
            <p>Sắp xếp theo giá</p>
          </div>
          <div className="categories-box">
            <ul>
              <li
                className="price-filter"
                onClick={() => this.sortByPrice(products, "latest")}
              >
                <p>Latest</p>
              </li>
              <li
                className="price-filter"
                onClick={() => this.sortByPrice(products, "lowest")}
              >
                <p>Lowest</p>
              </li>
              <li
                className="price-filter"
                onClick={() => this.sortByPrice(products, "highest")}
              >
                <p>Highest</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="sizes">
          <div className="title">
            <p>Sắp xếp theo Size</p>
          </div>
          <div className="categories-box">
            <ul>
              <li
                className="size-filter"
                onClick={() => this.filterBySize(products, "")}
              >
                <p>All</p>
              </li>
              <li
                className="size-filter"
                onClick={() => this.filterBySize(products, "XS")}
              >
                <p>XS</p>
              </li>
              <li
                className="size-filter"
                onClick={() => this.filterBySize(products, "S")}
              >
                <p>S</p>
              </li>
              <li
                className="size-filter"
                onClick={() => this.filterBySize(products, "M")}
              >
                <p>M</p>
              </li>
              <li
                className="size-filter"
                onClick={() => this.filterBySize(products, "L")}
              >
                <p>L</p>
              </li>
              <li
                className="size-filter"
                onClick={() => this.filterBySize(products, "XL")}
              >
                <p>XL</p>
              </li>
              <li
                className="size-filter"
                onClick={() => this.filterBySize(products, "XXL")}
              >
                <p>XXL</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;

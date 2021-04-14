import React, { Component } from "react";

import data from "../../categories.json";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: data.categories,
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <section className="categories-container">
        <div className="title">
          <p>Chọn sản phẩm</p>
          <div className="icon"></div>
        </div>
        <div className="categories-box">
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <p>{category}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Categories;
